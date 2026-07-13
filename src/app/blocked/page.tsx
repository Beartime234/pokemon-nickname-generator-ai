export default function Blocked() {
    return (
        <div className="flex flex-col items-center p-8 text-center">
            <h1 className="text-2xl font-bold">Slow down!</h1>
            <p className="pt-2">
                You&apos;re making requests too quickly. Wait a few seconds and
                try again.
            </p>
        </div>
    )
}
