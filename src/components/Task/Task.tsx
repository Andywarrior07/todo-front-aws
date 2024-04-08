interface Props {
    title: string;
    description?: string;
    status: string;
}

export const Task = ({title, description, status}: Props) => {
    return (
        <div
            className="my-1 max-w-[26rem] min-w-96 whitespace-normal break-words rounded-2xl bg-gray-500 p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none"
        >
            <div className="mb-2 flex items-center justify-between gap-3">
                {/* Task title */}
                <p
                    className="block font-sans text-base font-medium leading-relaxed tracking-normal text-blue-gray-900 antialiased transition-colors"
                >
                    {title}
                </p>

                {/* Task status */}
                <div
                    className="center relative inline-block select-none whitespace-nowrap rounded-full bg-purple-500 py-1 px-2 align-baseline font-sans text-xs font-medium capitalize leading-none tracking-wide text-white"

                >
                    <div className="mt-px">{status}</div>
                </div>
            </div>

            {/* Task description */}
            <p className="block font-sans text-sm font-normal leading-normal text-gray-300 antialiased">
                {description}
            </p>
        </div>
    );
};