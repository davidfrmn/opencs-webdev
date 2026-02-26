<script>
    let { todoId } = $props();
    import TaskList from "$lib/components/todos/TaskList.svelte";
    import AddTask from '$lib/components/todos/AddTask.svelte';
</script>

<h1>Todo {todoId}</h1>
<TaskList todoId={todoId} />
<AddTask {todoId}/>
