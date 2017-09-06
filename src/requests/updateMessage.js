export default function updateMessage(messageId,fieldChange){
return fetch(`https://api.airtable.com/v0/appGRqFQ2KAcH8BSy/messages/${messageId}`, {
  method: 'PATCH',
  headers: {
    Authorization: 'Bearer key7ptpwgLtpjCrBc',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    fields: fieldChange
  })
})
 .then(response => response.json())
 .then(record => {
  
return {
    id: record.id,
    body: record.fields.body||'',
    subject: record.fields.subject||'',
    read: record.fields.read||'',
    starred: record.fields.starred||'',
    labels: record.fields.labels?record.fields.labels.split(','):[],
    date:record.fields.date?record.fields.date:''
 };
})
}