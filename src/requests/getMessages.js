export default function getMessages() {
    return fetch('https://api.airtable.com/v0/appGRqFQ2KAcH8BSy/messages', {
            headers: {
                Authorization: 'Bearer key7ptpwgLtpjCrBc'
            }
        }).then(response => response.json())
        .then(data => data.records.map(record => ({
            id: record.id,
            body: record.fields.body,
            subject: record.fields.subject,
            read: record.fields.read ? record.fields.read : false,
            starred: record.fields.starred ? record.fields.starred : false,
            labels: record.fields.labels ? record.fields.labels.split(',') : [],
            date: record.fields.date ? record.fields.date : false
        })))
}