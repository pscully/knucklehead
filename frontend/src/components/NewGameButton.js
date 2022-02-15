import { PlusSmIcon as PlusSmIconOutline } from '@heroicons/react/outline'

const NewGameButton = () => {
    return (
        <button
            type="button"
            className="inline-flex items-center p-3 text-white bg-indigo-600 border border-transparent rounded-full shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <PlusSmIconOutline className="w-6 h-6" aria-hidden="true" />
        </button>
    )
}

export default NewGameButton
