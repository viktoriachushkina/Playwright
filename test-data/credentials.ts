import { test as baseTest, expect } from '@playwright/test';
export const users = {
    mainUser: {
        name: "Vika",
        lastName: "Vika",
        email: "vika@test.test",
        password: "Test1234567890",
    },
    user2: {
        name: "vika2",
        lastName: "vika2",
        email: "viktoriacuskina@gmail.com",
        password: "Test1234567890",
    },
}

export const incorrectPassword = 'wrongPassword';
