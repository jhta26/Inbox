export default function createMessage(newMessage) {
    return fetch(`https://api.airtable.com/v0/appGRqFQ2KAcH8BSy/messages/`, {
            method: 'POST',
            headers: {
                Authorization: 'Bearer key7ptpwgLtpjCrBc',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fields: {
                    subject: newMessage.subject,
                    read: newMessage.read,
                    starred: newMessage.starred,
                    labels: newMessage.labels.join(','),
                    body: newMessage.body,
                    date: newMessage.date

                }
            })
        })
        .then(response => response.json())
        .then(record => {

            return {
                id: record.id,
            };
        })
}