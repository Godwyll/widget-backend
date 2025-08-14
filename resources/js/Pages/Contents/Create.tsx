import { useForm } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Create({ auth, ziggy, onClose }: PageProps & { onClose: () => void }) {
    const { data, setData, post, processing, errors } = useForm({
        type: '',
        title: '',
        body: '',
        is_active: true,
    });

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post(route('contents.store'), {
            onSuccess: () => onClose(),
        });
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 p-6">
            <h2 className="font-semibold text-xl leading-tight mb-4"><span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent dark:from-slate-100 dark:to-slate-400">Create Content</span></h2>
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Type <span className="text-red-500">*</span></label>
                <select
                    value={data.type}
                    onChange={e => setData('type', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 dark:bg-gray-700 dark:text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    required
                >
                    <option value="">- Select -</option>
                    <option value="tip">Tip</option>
                    <option value="survey">Survey</option>
                </select>
                {errors.type && <div className="text-red-500 text-xs mt-1">{errors.type}</div>}
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Title <span className="text-red-500">*</span></label>
                <input
                    type="text"
                    value={data.title}
                    onChange={e => setData('title', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 dark:bg-gray-700 dark:text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    required
                />
                {errors.title && <div className="text-red-500 text-xs mt-1">{errors.title}</div>}
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Description <span className="text-red-500">*</span></label>
                <textarea
                    value={data.body}
                    onChange={e => setData('body', e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 dark:bg-gray-700 dark:text-gray-100 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    rows={2}
                    required
                />
                {errors.body && <div className="text-red-500 text-xs mt-1">{errors.body}</div>}
            </div>
            <div className="flex items-center">
                <input
                    id="is_active"
                    type="checkbox"
                    checked={data.is_active}
                    onChange={e => setData('is_active', e.target.checked)}
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label htmlFor="is_active" className="ml-2 block text-sm text-gray-700 dark:text-gray-200">
                    Active
                </label>
                {errors.is_active && <div className="text-red-500 text-xs mt-1">{errors.is_active}</div>}
            </div>
            <div className="flex items-center justify-between">
                <button type="button" onClick={onClose} className="text-slate-600 dark:text-slate-300 hover:underline">Cancel</button>
                <button type="submit" disabled={processing} className="ml-4 inline-flex items-center gap-2 px-3 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm ring-1 ring-inset ring-indigo-600/20 disabled:opacity-50">
                    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4.75a.75.75 0 0 1 .75.75v5.75H18.5a.75.75 0 0 1 0 1.5h-5.75V18.5a.75.75 0 0 1-1.5 0v-5.75H5.5a.75.75 0 0 1 0-1.5h5.75V5.5A.75.75 0 0 1 12 4.75Z"/></svg>
                    Create
                </button>
            </div>
        </form>
    );
}
