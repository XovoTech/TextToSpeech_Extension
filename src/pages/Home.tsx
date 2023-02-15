import React, { useEffect, useState, useMemo } from 'react';
import { IDropdownItem, Dropdown, Input } from 'forging-react';
import styles from '../styles/home.module.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/types';
import moment from 'moment';

function Home() {
  const [voices, setVoices] = useState<Array<chrome.tts.TtsVoice>>();
  const [selectedVoice, setSelectedVoice] = useState<chrome.tts.TtsVoice>();
  const [defaultPitch, setDefaultPitch] = useState<number>();
  const [defaultRate, setDefaultRate] = useState<number>();
  const [charCount, setCharCount] = useState<number>(5000);
  const [voiceType, setVoiceType] = useState<'google' | 'amazon'>("google");
  const navigate = useNavigate();
  const { user, subscription } = useSelector((store: RootState) => {
    return {
      user: store.auth.user,
      subscription: store.auth.subscription,
    }
  });

  useEffect(() => {
    if (!user?.user_email) {
      navigate('/login');
    }
  }, [user, navigate])

  useEffect(() => {
    const populateVoiceList = async () => {
      const _voices = (await chrome.tts.getVoices()).sort(function (a, b) {
        const aname = a.voiceName?.toUpperCase() || "";
        const bname = b.voiceName?.toUpperCase() || "";

        if (aname < bname) {
          return -1;
        } else if (aname == bname) {
          return 0;
        } else {
          return +1;
        }
      });

      chrome.storage.sync.get(["name", "lang"]).then((result) => {
        const selected = _voices.find(v => v.voiceName == result.name && v.lang == result.lang) || _voices[0];
        setSelectedVoice(selected);
      }).finally(() => {
        setVoices(_voices);
      });
    }

    populateVoiceList();

    chrome.storage.sync.get(["pitch", "rate", "char_count", "type"]).then((result) => {
      setDefaultPitch(parseFloat(result.pitch || "1"))
      setDefaultRate(parseFloat(result.rate || "1"))
      setCharCount(parseFloat(result.char_count || "5000"))
      setVoiceType(result.type);
    })

    chrome.storage.onChanged.addListener((changes, namespace) => {
      if (namespace == "sync") {
        for (const [key, { newValue }] of Object.entries(changes)) {
          if (key == "char_count" || moment().isAfter(moment(subscription?.next_payment_date))) {
            setCharCount(parseFloat(newValue));
          }
        }
      }
    });

    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = populateVoiceList;
    }
  }, [subscription]);

  useEffect(() => {
    const onChangeHandler = (changes: { [key: string]: chrome.storage.StorageChange }, namespace: "sync" | "local" | "managed" | "session") => {
      if (namespace == "sync") {
        for (const [key, { newValue }] of Object.entries(changes)) {
          if (key == "char_count") {
            setCharCount(parseFloat(newValue));
          }
        }
      }
    }

    chrome.storage.onChanged.addListener(onChangeHandler);
    return () => {
      chrome.storage.onChanged.removeListener(onChangeHandler);
    };
  }, [])

  const dropdownMenu = useMemo(() => {
    if (!voices) return {};

    return voices.reduce((result, voice) => {
      result[`${voice.voiceName || ""}|${voice.lang}`] = {
        label: `${voice.voiceName || ""} (${voice.lang})`.trim()
      }
      return result;
      // eslint-disable-next-line no-unused-vars
    }, {} as { [key in string]: IDropdownItem })

  }, [voices]);

  const setActiveVoice = (key: string) => {
    const [name, lang] = key.split('|');
    chrome.storage.sync.set({ name, lang })
  }

  const setPitch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    chrome.storage.sync.set({ "pitch": e.currentTarget.value })
    setDefaultPitch(parseFloat(e.currentTarget.value || "0"))
  }

  const setRange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    chrome.storage.sync.set({ "rate": e.currentTarget.value })
    setDefaultRate(parseFloat(e.currentTarget.value || "0.5"))
  }

  const setType = (type: string) => {
    setVoiceType(type as typeof voiceType);
    chrome.storage.sync.set({ type });
  }

  return (
    <div className={styles.main_container}>

      {moment().isAfter(moment(subscription?.next_payment_date)) ? (
        <div className="d-flex flex-row justify-content-between align-items-center">
          <small>{"Free Tier"}</small>
          <small>{charCount}</small>
        </div>
      ) : null}

      <h3>Configuration</h3>
      {
        typeof defaultRate == "number" ? (
          <Input htmlType='range' value={defaultRate} type='floating' label="Rate" min="0.5" max="2" defaultValue="1" step="0.1" onChange={setRange} />
        ) : null
      }

      {
        typeof defaultRate == "number" ? (
          <Input htmlType='range' value={defaultPitch} type='floating' label="Pitch" min="0" max="2" defaultValue="1" step="0.1" onChange={setPitch} />
        ) : null
      }
      <div>

      </div>
      <Dropdown
        className={styles.dropdown}
        label="Voice Accent"
        options={{ 'google': { label: 'Google', icon: 'google' }, 'amazon': { label: 'Amazon', icon: 'cloud' } }}
        onItemClick={setType}
        value={voiceType}
      />
      
      {
        voiceType == 'google' ? (
          <Dropdown
            className={styles.dropdown}
            label="Google Voice Accent"
            options={dropdownMenu}
            onItemClick={setActiveVoice}
            value={`${selectedVoice?.voiceName || ""}|${selectedVoice?.lang || ""}`}
          />
        ) : null
      }
    </div>
  )
}

export default Home;
