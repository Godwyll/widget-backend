import { Content } from '@/types';

export default function Show({ content, onClose }: { content: Content; onClose: () => void }) {
    return (
        <form className="space-y-6 p-6">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{content.title}</h2>
                <span
                    className={
                        `inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ` +
                        (content.is_active
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                            : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300')
                    }
                >
                    {content.is_active ? 'Active' : 'Inactive'}
                </span>
                <span
                    className={
                        `inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ` +
                        (content.type === 'tip'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                            : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300')
                    }
                >
                    {content.type === 'tip' ? 'Tip' : 'Survey'}
                </span>
            </div>
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Description</h4>
                <p className="text-gray-800 dark:text-gray-100 whitespace-pre-line">{content.body ?? ''}</p>
            </div>
            <div className="pt-4 flex justify-between">
                <button type="button" onClick={onClose} className="text-gray-600 dark:text-gray-300 hover:underline">Close</button>
            </div>
        </form>
    );
}
