import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import { PageProps, User } from '@/types';
import DataTable from 'react-data-table-component';
import { useState, useEffect } from 'react';

export default function Index({ auth, users }: PageProps<{ users: User[] }>) {
    const [search, setSearch] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(users);

    // Filter users when search changes
    useEffect(() => {
        setFilteredUsers(
            users.filter(
                (user) =>
                    user.name.toLowerCase().includes(search.toLowerCase()) ||
                    user.email.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, users]);

    const columns = [
        {
            name: 'ID',
            selector: (row: User) => row.id,
            sortable: true,
        },
        {
            name: 'Name',
            selector: (row: User) => row.name,
            sortable: true,
        },
        {
            name: 'Email',
            selector: (row: User) => row.email,
            sortable: true,
        },
        {
            name: 'Actions',
            cell: (user: User) => (
                <>
                    <Link
                        href={route('users.edit', { user: user.id })}
                        className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-200 font-medium mr-4"
                    >
                        Edit
                    </Link>
                    <button
                        onClick={() => {
                            if (confirm('Are you sure you want to delete this user?')) {
                                router.delete(route('users.destroy', { user: user.id }), {
                                    onSuccess: () => window.location.reload(),
                                });
                            }
                        }}
                        className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-200 font-medium"
                    >
                        Delete
                    </button>
                </>
            ),
        },
    ];

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Users</h2>}
        >
            <Head title="Users" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-end mb-4">
                        <Link
                            href={route('users.create')}
                            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                        >
                            Create User
                        </Link>
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
                            data={filteredUsers}
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
        </AuthenticatedLayout>
    );
}
