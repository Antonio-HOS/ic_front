"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import styles from './page.module.css';

export default function Home() {
  const [records, setRecords] = useState([]);
  const router = useRouter();

  // Fetch the records when the component is loaded
  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:8000/RecordC/');
        setRecords(res.data.Records);  // Assuming the API returns a list of records
      } catch (error) {
        console.error('Error fetching records:', error);
        setRecords([]);
      }
    };

    fetchRecords();
  }, []);

  const goBack = () => {
    router.back();
  };

  const goLaudo = () => {
    router.push("/registro");
  };

  return (
    <main className={styles.main}>
      <div className={styles.links}>
        <h1><a href="/">Aqua Portal</a></h1>
        <label htmlFor="page">
          <a href="/comunidade">Comunidade</a>
        </label>
        <label htmlFor="page">
          <a href="/login">Entrar</a>
        </label>
      </div>
      <h1>Bem Vindo a Comunidade !</h1>
      {/* Render the list of records */}
      {records.length > 0 ? (
        records.map((record) => (
          <div key={record.id} className={styles.box}>
            <div className={styles.boxText}>
              <h3>{record.title}</h3>
              <p>{record.description}</p>
              <h4>Arquivos</h4>
              <ul>
                {/* Check if each file exists before rendering the link */}
                {record.arq && (
                  <li>
                    <a href={record.arq} target="_blank" rel="noopener noreferrer">
                      Arquivo Enviado
                    </a>
                  </li>
                )}
                {record.returned_arq && (
                  <li>
                    <a href={record.returned_arq} target="_blank" rel="noopener noreferrer">
                      Arquivo Retornado
                    </a>
                  </li>
                )}
                {record.excel && (
                  <li>
                    <a href={record.excel} target="_blank" rel="noopener noreferrer">
                      Arquivo Excel
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        ))
      ) : (
        <p>Não há registros disponíveis.</p>
      )}
    </main>
  );
}
