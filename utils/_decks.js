import { AsyncStorage } from 'react-native'

export const DECKS_KEY = 'UdacityFlashCards'

let decks = {
    Matemática: {
        title: 'Matemática',
        questions: [
            {
                question: 'Quanto é 1 + 1?',
                answer: '2'
            },
            {
                question: 'Quanto é 2 + 2?',
                answer: '4'
            },
        ]
    },
    Udacity: {
        title: 'Udacity',
        questions: [
            {
                question: 'Onde é o melhor lugar para aprender React?',
                answer: 'Udacity'
            },
            {
                question: 'O NanoDegree React é presencial ou Remoto?',
                answer: 'Remoto'
            }
        ]
    }
}

function setData() {
    AsyncStorage.setItem(DECKS_KEY, JSON.stringify(decks))
    return decks
}

export function formatDecksResults(results) {
    return results === null ? setData() : JSON.parse(results)
}