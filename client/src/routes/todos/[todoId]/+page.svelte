<script>
    import { page } from "$app/state";
    let todoID = $derived(parseInt(page.params.todoId));
</script>

<h1>Todo {todoID}</h1>
<a href="/todos/{todoID}/tasks/1">Go to first task</a>
<a href="/todos/{todoID + 1}">Go to next todo</a>