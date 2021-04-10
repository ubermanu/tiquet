<script>
  import {
    Form,
    ButtonSet,
    Button,
    TextInput,
    TextArea
  } from 'carbon-components-svelte'
  import { writable } from 'svelte/store'
  import { addIssue } from '../stores/issues'

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
<Form on:submit>
  <TextInput
    labelText="Title"
    name="title"
    class="input"
    type="text"
    bind:value={$issue.title}
    required
  />

  <TextArea
    labelText="Description"
    name="description"
    class="textarea"
    bind:value={$issue.description}
  />

  <ButtonSet>
    <Button>Submit</Button>
    <Button kind="secondary">Cancel</Button>
  </ButtonSet>
</Form>
