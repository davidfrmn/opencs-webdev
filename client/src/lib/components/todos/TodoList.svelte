<script>
    let todos = $state([
        { id: 1, name: 'First todo' },
        { id: 2, name: 'Second todo' },
        { id: 3, name: 'Third todo' }
    ]);
</script>

<h1>Todos</h1>
<ul>
{#each todos as todo}
    <li>
        <a href="/todos/{todo.id}">{todo.name}</a>
    </li>
{/each}
</ul>
