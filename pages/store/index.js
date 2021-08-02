import Head from "next/head";
import { Box, Table, Thead, Tbody, Tr, Th, Td, Button } from "@chakra-ui/react";
import { getAllProducts } from "@services/Product";
import { Section, Title } from "@styles/indexStyle";

export default function Home({ store }) {
    const data = store.data && store.data[0];
    return (
        <div>
            <Head>
                <title>Product</title>
            </Head>

            <Section>
                <Title>Store - {data && data.name}</Title>
                <Box>
                    <Button colorScheme="teal" variant="outline" size="md" w="100%" my="15px">Registrar Producto</Button>
                </Box>
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
                        {data.products.length > 0 &&
                            data.products.map((product, index) => (
                                <Tr key={index}>
                                    <Td>{product.name}</Td>
                                    <Td>{product.unid}</Td>
                                    <Td>{product.historyPurchasePrice[0]}</Td>
                                    <Td isNumeric>
                                        {product.historySalePrice[0]}
                                    </Td>
                                    <Td>{product.description}</Td>
                                </Tr>
                            ))}
                    </Tbody>
                </Table>
            </Section>
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
