import { createPool } from 'mysql2/promise';

const pool = createPool({
    host:'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'bd_psicositas'
});

pool.getConnection().then(
    connection=>{
        pool.releaseConnection(connection);
        console.log('Conexión Exitosa');
    }
);

export default pool;
