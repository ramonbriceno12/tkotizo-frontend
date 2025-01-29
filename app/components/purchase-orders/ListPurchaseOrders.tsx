import React, { useEffect, useState } from 'react';
import { FaList, FaFileInvoice, FaExclamationTriangle, FaTimesCircle, FaCheckCircle, FaFileInvoiceDollar } from 'react-icons/fa';

interface PurchaseOrder {
    id: string;
    userId: string;
    userClientId: string;
    file: string;
    value: number;
    status: string;
    createdAt: string;
}

const ListPurchaseOrders = () => {
    const [purchaseOrders, setPurchaseOrders] = useState<PurchaseOrder[]>([]);

    useEffect(() => {
        // Fetch PurchaseOrder data from an API or use static data
        const fetchPurchaseOrders = async () => {
            try {

                const response = await fetch('http://localhost:8000/purchase-orders/list/client/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`, // Agregar el token Bearer en el encabezado
                    },
                    body: JSON.stringify({ email: localStorage.getItem('email') })
                });

                const data = await response.json();

                const formattedData = data.data.map((order: any) => ({
                    id: order.id,
                    userId: order.user_id,
                    userClientId: order.user_client_id,
                    file: order.file,
                    status: order.status,
                    createdAt: order.created_at,
                    value: order.value,
                }));

                setPurchaseOrders(formattedData);

            } catch (error) {
                console.error('Error fetching PurchaseOrders:', error);
            }
        };

        fetchPurchaseOrders();
    }, []);

    const getStatusText = (status: string) => {
        switch (status) {
            case 'purchase-order':
                return (
                    <div className="flex items-center space-x-2">
                        <FaList className="text-blue-500" />
                        <span>Cotización creada</span>
                    </div>
                );
            case 'invoice':
                return (
                    <div className="flex items-center space-x-2">
                        <FaFileInvoice className="text-green-500" />
                        <span>Factura enviada</span>
                    </div>
                );
            case 'active':
                return (
                    <div className="flex items-center space-x-2">
                        <FaExclamationTriangle className="text-yellow-500" />
                        <span>Activa</span>
                    </div>
                );
            case 'cancelled-purchase-order':
                return (
                    <div className="flex items-center space-x-2">
                        <FaTimesCircle className="text-red-500" />
                        <span>Cotización cancelada</span>
                    </div>
                );
            case 'paid':
                return (
                    <div className="flex items-center space-x-2">
                        <FaCheckCircle className="text-green-500" />
                        <span>Pagada</span>
                    </div>
                );
            case 'cancelled-invoice':
                return (
                    <div className="flex items-center space-x-2">
                        <FaFileInvoiceDollar className="text-red-500" />
                        <span>Factura cancelada</span>
                    </div>
                );
            default:
                return status;
        }
    };

    console.log(purchaseOrders);

    return (
        <section className="py-16 bg-gray-100">
            <h2 className="text-3xl font-semibold text-center mb-8">Mis cotizaciones</h2>
            <div className="container mx-auto px-4">
                <div className="overflow-x-auto">
                    {purchaseOrders.length === 0 ? (
                        <div className="text-center text-gray-700 py-8">
                            No purchase orders found.
                        </div>
                    ) : (
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">#</th>
                                    <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Date</th>
                                    <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">File</th>
                                    <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Value</th>
                                    <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {purchaseOrders.map(purchaseOrder => (
                                    <tr key={purchaseOrder.id}>
                                        <td className="py-2 px-4 border-b border-gray-200">{purchaseOrder.id}</td>
                                        <td className="py-2 px-4 border-b border-gray-200">{new Date(purchaseOrder.createdAt).toLocaleDateString()}</td>
                                        <td className="py-2 px-4 border-b border-gray-200">
                                            <a href={purchaseOrder.file} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View File</a>
                                        </td>
                                        <td className="py-2 px-4 border-b border-gray-200">${purchaseOrder.value}</td>
                                        <td className="py-2 px-4 border-b border-gray-200">{getStatusText(purchaseOrder.status)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ListPurchaseOrders;