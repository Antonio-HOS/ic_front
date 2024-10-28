// "use client"

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import axios from 'axios';
// import styles from './page.module.css';
// import { Header } from '@/componentes/header';

// export default function Home() {
//   interface Record {
//     id: number;
//     title: string;
//     description: string;
//     arq_url?: string;
//     returned_arq_url?: string;
//   }



//   const [records, setRecords] = useState<Record[]>([]);
//   const router = useRouter();

//   // Fetch the records when the component is loaded
//   useEffect(() => {
//     const fetchRecords = async () => {
//       try {
//         const res = await axios.get('http://127.0.0.1:8000/RecordC/');
//         setRecords(res.data.Records);  // Assuming the API returns a list of records
//       } catch (error) {
//         console.error('Error fetching records:', error);
//         setRecords([]);
//       }
//     };

//     fetchRecords();
//   }, []);

//   const goBack = () => {
//     router.back();
//   };

//   const goLaudo = () => {
//     router.push("/registro");
//   };

//   return (
//     <main className={styles.main}>
//     <Header />
//       <h1>Bem Vindo a Comunidade !</h1>
//       {/* Render the list of records */}
//       {records && records.length > 0 ? (
//         records.map((record) => (
//           <div key={record.id} className={styles.box}>
//             <div className={styles.boxText}>
//               <h3>{record.title}</h3>
//               <p>{record.description}</p>
//               <h4>Arquivos</h4>
//               <ul>
//                 {/* Check if each file exists before rendering the link */}
//                 {record.arq_url && (
//                   <li>
//                     <a href={record.arq_url} target="_blank" rel="noopener noreferrer">
//                       Arquivo Enviado
//                     </a>
//                   </li>
//                 )}
//                 {record.returned_arq_url && (
//                   <li>
//                     <a href={record.returned_arq_url} target="_blank" rel="noopener noreferrer">
//                       Arquivo Retornado
//                     </a>
//                   </li>
//                 )}
//               </ul>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>Não há registros disponíveis.</p>
//       )}
//     </main>
//   );
// }
"use client"

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
import { Header } from '@/componentes/header';

export default function Home() {
  interface Record {
    id: number;
    title: string;
    description: string;
    arq_url?: string;
    returned_arq_url?: string;
  }

  const [records, setRecords] = useState<Record[]>([]);
  const router = useRouter();

  // Função para gerar dados falsos
  useEffect(() => {
    const fetchRecords = async () => {
      try {
        // Dados de exemplo
        const fakeData: Record[] = [
          {
            id: 1,
            title: "Primeiro Registro",
            description: "Descrição do primeiro registro",
            arq_url: "https://exemplo.com/arquivo1.pdf",
            returned_arq_url: "https://exemplo.com/arquivo1-retornado.pdf"
          },
          {
            id: 2,
            title: "Segundo Registro",
            description: "Descrição do segundo registro",
            arq_url: "https://exemplo.com/arquivo2.pdf"
          },
          {
            id: 3,
            title: "Terceiro Registro",
            description: "Descrição do terceiro registro"
          }
        ];
        setRecords(fakeData);
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
    <main className={styles.background}>
      <Header />
      <div className='flex h-20'/>
      <h1 className='mt-4 text-2xl md:text-3xl text-center font-abel'>Bem Vindo a Comunidade !</h1>
      {/* Renderizar lista de registros */}
      <div className='overflow-y-auto  flex flex-col h-3/4'>
      {records && records.length > 0 ? (
          records.map((record) => (
            <div
              key={record.id}
              className="p-5 my-4 rounded-lg flex gap-12 items-center bg-white w-[95%] md:w-2/3 mx-auto hover:shadow-2xl transition-all duration-300"
            >
              <div className="m-1">
                <h3 className="text-lg font-bold">{record.title}</h3>
                <p className="text-justify">{record.description}</p>
                <h4 className="mt-4 font-semibold">Arquivos:</h4>
                <ul className="text-sm pl-5">
                  {record.arq_url ? (
                    <li className="my-1">
                      <a
                        href={record.arq_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        • Click para ver o arquivo enviado
                      </a>
                    </li>
                  ) : (
                    <li className="my-1 text-gray-500">
                      Nenhum arquivo enviado
                    </li>
                  )}
                  {record.returned_arq_url ? (
                    <li className="my-1">
                      <a
                        href={record.returned_arq_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                       • Click para ver o arquivo Retornado
                      </a>
                    </li>
                  ) : (
                    <li className="my-1 text-gray-500">
                      Nenhum arquivo retornado
                    </li>
                  )}
                </ul>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center mt-6 text-gray-500">
            Não há registros disponíveis.
          </p>
        )}
      </div>
    </main>
  );
}
