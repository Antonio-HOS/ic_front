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
      // Get the token from localStorage
      const token = localStorage.getItem('token');

      try {
        const res = await axios.get('http://127.0.0.1:8000/Record/', {
          headers: {
            'Authorization': `Token ${token}`,  // Corrected token concatenation
          },
        });
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
      <button className={styles.Sair} onClick={goBack}>Sair</button>
      <h1>Bem Vindo, Usuario!</h1>
      <button><a href="/addRegistro">Adicionar registro</a></button>

      {/* Render the list of records */}
      {records && records.length > 0 ? (
        records.map((record) => (
          <div key={record.id} className={styles.box}>
            <div className={styles.boxText}>
              <h3>{record.title}</h3>
              <p>{record.description}</p>
              <h4>Arquivos</h4>
              <ul>
                {/* Check for the existence of each file and render its link */}
                {record.arq_url && (
                  <li>
                    <a href={record.arq_url} target="_blank" rel="noopener noreferrer">
                      Arquivo Enviado
                    </a>
                  </li>
                )}
                {record.returned_arq_url && (
                  <li>
                    <a href={record.returned_arq_url} target="_blank" rel="noopener noreferrer">
                      Arquivo Retornado
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