import axios from 'axios';
import styles from "./page.module.css";

const fetchRecords = async () => {
  try {
    const res = await axios.get('http://127.0.0.1:8000/RecordC/');
    return res.data.Records;  // Assuming the API returns the structure you provided
  } catch (error) {
    console.error('Error fetching records:', error);
    return [];
  }
};

export default async function Home() {
  const records = await fetchRecords();

  return (
    <main className={styles.main}>
      <div className={styles.list}>
        <ul>
          {records.map((record, index) => (
            <li key={index}>
              <h3>Título: {record.title}</h3>
              <p>Descrição: {record.description}</p>
              <p>Data e Hora: {record.created_at}</p>
              <a href={record.returned_arq} download>
                Análise da IA
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}