<script>
  // import { createIssue } from './actions/issueActions'
  // import { getIssuesByKeyword } from './selectors/issueSelectors'

  import { writable } from 'svelte/store'

  const form = writable({
    title: '',
    description: ''
  })

  // const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()
    // dispatch(createIssue(formData))
    // setFormData(initialFormData)
  }

  // Find issues that would match the new one
  // const alikeIssues = getIssuesByKeyword(formData.title)
</script>

<div class="container">
  <h1 class="title is-1">New issue</h1>
  <div class="columns">
    <div class="column is-half">
      <form onSubmit={handleSubmit}>
        <div class="field">
          <label class="label">Title</label>
          <div class="control">
            <input name="title" class="input" type="text" bind:value={form.title} required />
          </div>
        </div>

        <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <textarea name="description" class="textarea" bind:value={form.description}></textarea>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
          <div class="control">
            <!--            <Link to={`/issues`} class="button is-link is-light">Cancel</Link>-->
          </div>
        </div>
      </form>
    </div>
    <div class="column is-half">
      <div class="label">Matching issues</div>
      <article class="message is-small">
        <div class="message-body">
          Check if the issue does not exist already
        </div>
      </article>
      <!--{alikeIssues.map(issue => (-->
      <!--  <div class="card mb-4" key={issue.id}>-->
      <!--    <div class="card-content">-->
      <!--      <span class="is-size-6">{issue.title}</span>-->
      <!--    </div>-->
      <!--  </div>-->
      <!--))}-->
    </div>
  </div>
</div>
