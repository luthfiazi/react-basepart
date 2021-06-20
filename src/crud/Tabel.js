import React from 'react'
import {Table} from 'react-bootstrap'

const Tabel = () => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Nama Makanan</th>
                <th>Deskripsi</th>
                <th>Harga</th>
                <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Soto</td>
                <td>Soto bandung Enak Gurih</td>
                <td>30000</td>
                <td></td>
                </tr>
            </tbody>
        </Table>
    )
}

export default Tabel
