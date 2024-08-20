

export const initTheadData = [
    {
        checked: false,
        name: "testHead"
    }
]
export const initTbodyData = [
    {
        checked: false,
        name: "testBody"
    },
    {
        checked: false,
        name: "cyjBody"
    },
    {
        checked: false,
        name: "what?"
    },
    {
        checked: false,
        name: "halo"
    },
    {
        checked: false,
        name: "TT"
    }
]


export function createData(count: number){

    const data = []
    for (let i = 0; i < count; i++) {
        data.push({
            checked: false,
            name: generateRandomString()
        })
    }
    return data
}

function generateRandomString() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;

    let length = (Math.random() * 25) + 5;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
