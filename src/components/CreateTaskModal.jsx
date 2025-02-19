import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { createTaskAsync } from '../store/tasksThunks';

const CreateTaskModal = ({ isOpen, onClose }) => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        status: 'TODO',
        priority: 'MEDIUM',
        assignees: '',
        dueDate: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Transform assignees string to array and remove empty strings
        const assigneesArray = formData.assignees
            .split(',')
            .map(assignee => assignee.trim())
            .filter(assignee => assignee !== '');

        const task = {
            ...formData,
            assignees: assigneesArray,
        };

        try {
            await dispatch(createTaskAsync(task));
            onClose();
            // Reset form
            setFormData({
                title: '',
                description: '',
                status: 'TODO',
                priority: 'MEDIUM',
                assignees: '',
                dueDate: ''
            });
        } catch (error) {
            console.error('Error creating task:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
            <div className="relative bg-white rounded-lg shadow-xl p-8 max-w-md w-full m-4">
                <h2 className="text-2xl font-bold mb-6">{t('tasks.createNewTask')}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            {t('tasks.title')} *
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            {t('tasks.description')}
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="3"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            {t('tasks.status')} *
                        </label>
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="TODO">{t('tasks.statuses.todo')}</option>
                            <option value="IN_PROGRESS">{t('tasks.statuses.inProgress')}</option>
                            <option value="DONE">{t('tasks.statuses.done')}</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            {t('tasks.priority')} *
                        </label>
                        <select
                            name="priority"
                            value={formData.priority}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="LOW">{t('tasks.priorities.low')}</option>
                            <option value="MEDIUM">{t('tasks.priorities.medium')}</option>
                            <option value="HIGH">{t('tasks.priorities.high')}</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            {t('tasks.assignees')}
                        </label>
                        <input
                            type="text"
                            name="assignees"
                            value={formData.assignees}
                            onChange={handleChange}
                            placeholder={t('tasks.assigneesPlaceholder')}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            {t('tasks.dueDate')}
                        </label>
                        <input
                            type="date"
                            name="dueDate"
                            value={formData.dueDate}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex justify-end space-x-3 mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {t('common.cancel')}
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {t('common.create')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateTaskModal; 