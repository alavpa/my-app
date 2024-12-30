

import AsyncStorage from '@react-native-async-storage/async-storage';

const LIMIT_KEY = "LIMIT_KEY";

export const saveLimit = async (limit: string) => {
    await saveData(LIMIT_KEY, limit);
}

export const getLimit = async () => {
    const limit = await getData(LIMIT_KEY) as string;
    return limit ? limit : "20";
}

const saveData = async (key: string, data: any) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.error(error);
    }
}

const getData = async (key: string) => {
    try {
        const data = await AsyncStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error(error);
    }
}