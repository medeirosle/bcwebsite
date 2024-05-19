export const getAgenda = async function () {
    try {
        const agenda = await fetch(import.meta.env.VITE_BASE_URL + '/agenda')

        return await agenda.json()

    } catch (err) {
        console.log(err)
    }
}

export const postContactMessage = async function (data){
    await fetch(import.meta.env.VITE_BASE_URL + '/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}