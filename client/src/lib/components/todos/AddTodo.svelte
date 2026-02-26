<script>
    import { useTodoState } from '$lib/states/todoState.svelte.js';
    let todoName = $state('');
    const { addTodo } = useTodoState();

    function handleAdd() {
        if (!todoName.trim()) return;
        addTodo(todoName);
        todoName = '';
    }
</script>

<input type="text" bind:value={todoName} placeholder="New todo name" />
<button onclick={handleAdd}>Add Todo</button>