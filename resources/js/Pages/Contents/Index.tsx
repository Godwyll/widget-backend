import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';
import { PageProps, Content } from '@/types';
import DataTable from 'react-data-table-component';
import { useState, useEffect } from 'react';
import Modal from '@/Components/Modal';
import Create from './Create';
import Edit from './Edit';
import Show from './Show';

export default function Index({ auth, contents, ziggy }: PageProps<{ contents: Content[] }>) {
    const [search, setSearch] = useState('');
    const [filteredContents, setFilteredContents] = useState(contents);
    const [showCreate, setShowCreate] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [editContent, setEditContent] = useState<Content | null>(null);
    const [showView, setShowView] = useState(false);
    const [viewContent, setViewContent] = useState<Content | null>(null);

    useEffect(() => {
        setFilteredContents(
            contents.filter(
                (content) =>
                    content.title.toLowerCase().includes(search.toLowerCase()) ||
                    content.type.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, contents]);

    const columns = [
        {
            name: 'Id',
            cell: (_row: Content, index: number) => index + 1,
            sortable: false,
        },
        {
            name: 'Title',
            selector: (row: Content) => row.title,
            sortable: true,
        },
        {
            name: 'Type',
            selector: (row: Content) => row.type,
            cell: (row: Content) => (
                <span
                    className={
                        `inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ` +
                        (row.type === 'tip'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                            : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300')
                    }
                >
                    {row.type === 'tip' ? 'Tip' : 'Survey'}
                </span>
            ),
            sortable: true,
        },

        {
            name: 'Active',
            selector: (row: Content) => row.is_active ? 'Yes' : 'No',
            sortable: true,
        },
        {
            name: 'Created By',
            selector: (row: Content) => row.created_by.name,
            sortable: true,
        },
        {
            name: 'Actions',
            cell: (content: Content) => (
                <>
                    <button
                        onClick={() => { setViewContent(content); setShowView(true); }}
                        className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-200 font-medium mr-4"
                        aria-label="View"
                        title="View"
                    >
                        <i className="fa-solid fa-eye"></i>
                    </button>
                    <button
                        onClick={() => {
                            setEditContent(content);
                            setShowEdit(true);
                        }}
                        className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-200 font-medium mr-4"
                        aria-label="Edit"
                        title="Edit"
                    >
                        <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                    <button
                        onClick={() => {
                            if (confirm('Are you sure you want to delete this content?')) {
                                router.delete(route('contents.destroy', { content: content.id }), {
                                    onSuccess: () => window.location.reload(),
                                });
                            }
                        }}
                        className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-200 font-medium"
                        aria-label="Delete"
                        title="Delete"
                    >
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </>
            ),
        },
    ];

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Contents</h2>}
        >
            <Head title="Contents" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={() => setShowCreate(true)}
                            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                        >
                            Create Content
                        </button>
                    </div>
                    <div className="bg-white dark:bg-gray-800 shadow sm:rounded-lg p-6">
                    <div className="mb-4 flex justify-end">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded w-full max-w-xs bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                        />
                    </div>
                        <DataTable
                            columns={columns}
                            data={filteredContents}
                            pagination
                            highlightOnHover
                            pointerOnHover
                            responsive
                            paginationComponentOptions={{
                                rowsPerPageText: 'Rows',
                                rangeSeparatorText: 'of',
                            }}
                            customStyles={{
                                table: {
                                    style: {
                                        backgroundColor: 'transparent',
                                    },
                                },
                                headRow: {
                                    style: {
                                        backgroundColor: 'rgb(31 41 55 / var(--tw-bg-opacity))',
                                        color: '#fff',
                                    },
                                },
                                rows: {
                                    style: {
                                        backgroundColor: 'transparent',
                                        color: '#fff',
                                    },
                                },
                                pagination: {
                                    style: {
                                        backgroundColor: 'transparent',
                                        color: '#fff',
                                    },
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
            <Modal show={showCreate} onClose={() => setShowCreate(false)}>
                <Create auth={auth} ziggy={ziggy} onClose={() => setShowCreate(false)} />
            </Modal>
            <Modal show={showEdit} onClose={() => setShowEdit(false)}>
                {editContent && <Edit auth={auth} ziggy={ziggy} content={editContent} onClose={() => setShowEdit(false)} />}
            </Modal>
            <Modal show={showView} onClose={() => setShowView(false)}>
                {viewContent && <Show content={viewContent} onClose={() => setShowView(false)} />}
            </Modal>
        </AuthenticatedLayout>
    );
}
