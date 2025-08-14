import { Content } from '@/types';

export default function Show({ content, onClose }: { content: Content; onClose: () => void }) {
    return (
        <div className="p-4">
            <div className="flex items-start justify-between">
                <div>
                    <h2 className="text-lg font-semibold mb-1">
                        <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent dark:from-slate-100 dark:to-slate-400">
                            {content.title}
                        </span>
                        <span
                            className={
                                `inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ml-2 align-middle ring-1 ring-inset ` +
                                (content.is_active
                                    ? 'bg-blue-50 text-blue-700 ring-blue-200 dark:bg-blue-900/30 dark:text-blue-200 dark:ring-blue-800'
                                    : 'bg-rose-50 text-rose-700 ring-rose-200 dark:bg-rose-900/30 dark:text-rose-200 dark:ring-rose-800')
                            }
                        >
                            <span className="mr-1">{content.is_active ? '🟢' : '⛔'}</span>
                            {content.is_active ? 'Active' : 'Inactive'}
                        </span>
                        <span
                            className={
                                `inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ml-2 align-middle ring-1 ring-inset ` +
                                (content.type === 'tip'
                                    ? 'bg-green-50 text-green-700 ring-green-200 dark:bg-green-900/30 dark:text-green-200 dark:ring-green-800'
                                    : 'bg-purple-50 text-purple-700 ring-purple-200 dark:bg-purple-900/30 dark:text-purple-200 dark:ring-purple-800')
                            }
                        >
                            <span className="mr-1">{content.type === 'tip' ? '💡' : '🗳️'}</span>
                            {content.type === 'tip' ? 'Tip' : 'Survey'}
                        </span>
                    </h2>
                </div>
                <button onClick={onClose} className="ml-3 inline-flex items-center justify-center h-8 w-8 rounded-full text-slate-500 hover:text-slate-700 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800 transition">
                    <span className="sr-only">Close</span>
                    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M6.225 4.811a1 1 0 0 1 1.414 0L12 9.172l4.361-4.361a1 1 0 0 1 1.415 1.414L13.415 10.586l4.361 4.361a1 1 0 1 1-1.415 1.415L12 12l-4.361 4.362a1 1 0 0 1-1.414-1.415l4.361-4.361-4.361-4.361a1 1 0 0 1 0-1.414Z"/></svg>
                </button>
            </div>

            <div className="mt-4">
                <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Description</h4>
                <div className="rounded-lg bg-slate-50 dark:bg-slate-800/60 text-slate-800 dark:text-slate-200 ring-1 ring-inset ring-slate-200/70 dark:ring-slate-700/60 p-3 whitespace-pre-line">
                    {content.body ?? ''}
                </div>
            </div>
        </div>
    );
}
