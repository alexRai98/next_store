import Head from "next/head";
import { Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { getAllProducts } from "@services/Product";

export default function Home({ store }) {
    const data = store.data && store.data[0];
    return (
        <div>
            <Head>
                <title>Product</title>
            </Head>

            <section>
                <Box>
                    <h1>Store - {data.name}</h1>
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th>Producto</Th>
                                <Th>Unidad</Th>
                                <Th>Precio de compra</Th>
                                <Th>Precio de venta</Th>
                                <Th>Description</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data && data.products.map((product, index) => (
                                <Tr key={index}>
                                    <Td>{product && product.name}</Td>
                                    <Td>{product && product.unid}</Td>
                                    <Td>{product && product.historyPurchasePrice[0]}</Td>
                                    <Td isNumeric>
                                        {product && product.hisrorySalePrice[0]}
                                    </Td>
                                    <Td>{product && product.description}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </Box>
            </section>
        </div>
    );
}

export async function getStaticProps(context) {
    let store = {};
    try {
        store = await getAllProducts();
    } catch (e) {
        console.log("Error", e);
    }

    return {
        props: { store }
    };
}
