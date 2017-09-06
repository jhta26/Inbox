export default function getMessages(){
	return fetch('https://api.airtable.com/v0/appGRqFQ2KAcH8BSy/messages', {
  headers: {
   Authorization: 'Bearer key7ptpwgLtpjCrBc'
  }
}).then(response => response.json()).then(data => data.records.map(record => ({
  id: record.id,
  body: record.fields.body,
  subject: record.fields.subject,
  read: record.fields.read,
  starred: record.fields.starred,
  labels: record.fields.labels.split(',')
}))).then(messages => {
   messages.json();
});
