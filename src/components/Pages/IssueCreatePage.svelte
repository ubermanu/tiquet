<script>
  import {
    Form,
    Button,
    TextInput,
    TextArea,
    FormGroup
  } from 'carbon-components-svelte'
  import { writable } from 'svelte/store'
  import { addIssue } from '../../stores/issues'
  import Add16 from 'carbon-icons-svelte/lib/Add16'

  let issue = writable({
    title: '',
    description: ''
  })

  function handleSubmit(e) {
    addIssue($issue)
    e.target.reset()
  }
</script>

<h1>New issue</h1>

<Form on:submit={handleSubmit}>
  <FormGroup>
    <TextInput labelText="Title" bind:value={$issue.title} required />
    <TextArea labelText="Description" bind:value={$issue.description} />
  </FormGroup>
  <Button type="submit" icon={Add16}>Create</Button>
</Form>
