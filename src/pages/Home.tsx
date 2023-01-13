import React, { useEffect, useState, useMemo } from 'react';
import { IDropdownItem, Dropdown, Input } from 'forging-react';
import styles from '../styles/home.module.css';
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom';
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';
import axios from 'axios';

const WooCommerce = new WooCommerceRestApi({
  url: "https://sonia.app",
  consumerKey: "ck_7f82ee8cfc1803d01f02dfd4cc1e49c6cc8e59d2",
  consumerSecret: "cs_d2454a99c5edc234fb21c6af8113bcb00c35dc98",
  version: "wc/v3",
});

function Home() {
  const [verifyEmail, setEmailVerify] = useState();
  const [voices, setVoices] = useState<Array<chrome.tts.TtsVoice>>();
  const [selectedVoice, setSelectedVoice] = useState<chrome.tts.TtsVoice>();
  const [defaultPitch, setDefaultPitch] = useState<number>();
  const [defaultRate, setDefaultRate] = useState<number>();
  const [charCount, setCharCount] = useState<number>(5000);
  const navigate = useNavigate()
  
  useEffect(() => {
    chrome.storage.sync.get(['user']).then((result) => {
      setEmailVerify(result.user?.user_email);
    }).catch((e) => {
      console.log(e);
    })
  }, [setEmailVerify])

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

    chrome.storage.sync.get(["pitch", "rate", "char_count"]).then((result) => {
      setDefaultPitch(parseFloat(result.pitch || "1"))
      setDefaultRate(parseFloat(result.rate || "1"))
      setCharCount(parseFloat(result.char_count || "5000"))
    })

    chrome.storage.onChanged.addListener((changes, namespace) => {
      if (namespace == "sync") {
        for (const [key, { newValue }] of Object.entries(changes)) {
          if (key == "char_count") {
            setCharCount(parseFloat(newValue));
          }
        }
      }
    });

    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = populateVoiceList;
    }
  }, []);

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

  const { data } = useQuery({
    queryKey: ['repoData', verifyEmail],
    queryFn: async () => {
       axios({
        url: 'https://sonia.app/wp-json/wc-yith-ywsbs/v1/subscriptions/',
        method: "GET",
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Basic ${btoa("ck_7f82ee8cfc1803d01f02dfd4cc1e49c6cc8e59d2:cs_d2454a99c5edc234fb21c6af8113bcb00c35dc98")}`
        },
      }).then(r => console.log(r)).catch(e => console.error(e));
      function email(user: any) {
        console.log(verifyEmail)
        return user?.["billing"]?.["email"] == verifyEmail
      }
      return {}
    }
  })

  // function billemail() {
  //   data && data.map((i, data) => {
  //     return <li key={data}>{data.billing && data.user_email}</li>
  //   })
  // }
  // console.log(

  if(status == 'processing'){
    navigate("/login")
  } else if (status == 'completed'){
    navigate("/")
  }
  
  return (
    <div className={styles.main_container}>
      <div className="d-flex flex-row justify-content-between align-items-center">
        <small>{"Free Tier"}</small>
        <small>{charCount}</small>
      </div>
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

      <Dropdown
        className={styles.dropdown}
        label="Voice Accent"
        options={dropdownMenu}
        onItemClick={setActiveVoice}
        value={`${selectedVoice?.voiceName || ""}|${selectedVoice?.lang || ""}`}
      />
    </div>
  )
}

export default Home;
