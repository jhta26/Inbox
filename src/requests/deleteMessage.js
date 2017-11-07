export default function deleteMessage(messageId) {
    return fetch(`https://api.airtable.com/v0/appGRqFQ2KAcH8BSy/messages/${messageId}`, {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer key7ptpwgLtpjCrBc',
                'Content-Type': 'application/json'
            }

        })

        .then(response => response.json())
        .then(record => {

            return {
                id: record.id,
            };
        })
}