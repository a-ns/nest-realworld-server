export interface IMutation {
    login(email: string, password: string): User | Promise<User>;
    register(email: string, username: string, password: string): User | Promise<User>;
    update(email?: string, username?: string, password?: string, image?: string, bio?: string): User | Promise<User>;
}

export interface Post {
    body: string;
    id: number;
}

export interface IQuery {
    post(id: number): Post | Promise<Post>;
    user(): User | Promise<User>;
    temp__(): boolean | Promise<boolean>;
}

export interface User {
    email: string;
    username: string;
    token?: string;
    image?: string;
    bio?: string;
}
