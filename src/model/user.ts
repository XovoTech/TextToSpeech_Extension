export interface IUser {
    token: string;
    user_display_name: string;
    user_email: string;
    user_nicename: string;
    has_expired?: boolean;
}