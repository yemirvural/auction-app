export default function Alert({ message, error }) {
    
    return (
        // null dönme ihtimaline karsi UX acisindan onemli 
        <div>
           {error == false ?
            <div class="fixed bottom-5 left-5 p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-200 dark:text-green-400" role="alert">
                <span class="font-medium">{message}</span>
            </div>
            : 
            error == true &&
            <div class="fixed bottom-5 left-5 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-200 dark:text-red-400" role="alert">
                <span class="font-medium">{message}</span>
            </div>
            }
        </div>
    )
}
