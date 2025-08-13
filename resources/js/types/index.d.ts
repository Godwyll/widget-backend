import { Config } from 'ziggy-js';

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export interface Content {
    id: number;
    type: 'tip' | 'survey';
    title: string;
    body: string | null;
    is_active: boolean;
    created_by: User;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
};
