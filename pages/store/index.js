import Head from "next/head";
import { Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { getAllProducts } from "@services/Product";

export default function Home({ store }) {
    console.log({ store });
    return (
        <div>
            <Head>
                <title>Products</title>
            </Head>

            <section>
                <Box>
                    <h1>Productos</h1>
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
                            <Tr>
                                <Td>inches</Td>
                                <Td>millimetres (mm)</Td>
                                <Td isNumeric>25.4</Td>
                            </Tr>
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
        store = await getAllProducts("60ed1dd5638dc3257dd1f29f");
        console.log("estoree!!", store)
    } catch (e) {
        console.log("Error", e);
    }

    return {
        props: { store }
    };
}
