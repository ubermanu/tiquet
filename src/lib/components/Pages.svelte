<script lang="ts">
  /** The pagination data */
  export let currentPage = 1
  export let pageSize = 10
  export let totalItems = 0

  /** The options for the paginator */
  export let amounts = [5, 10, 25, 50, 100]

  export let disabled = false
  export let amountText = 'Items'
  export let buttonTextPrevious = '&larr;'
  export let buttonTextNext = '&rarr;'

  function onChangeAmount(): void {
    window.location.href = `${window.location.pathname}?offset=1&limit=${pageSize}`
  }

  function onPrev(): void {
    window.location.href = `${window.location.pathname}?offset=${
      currentPage - 1
    }&limit=${pageSize}`
  }

  function onNext(): void {
    window.location.href = `${window.location.pathname}?offset=${
      currentPage + 1
    }&limit=${pageSize}`
  }

  const cBase =
    'flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4'
  const cLabel = 'w-full md:w-auto'
  const cPageText = 'whitespace-nowrap'

  // Reactive Classes
  $: classesBase = `${cBase} justify-between ${$$props.class ?? ''}`
  $: classesLabel = `${cLabel}`
  $: classesSelect = `select min-w-[150px]`
  $: classesPageText = `${cPageText} text-xs`
</script>

<div class="paginator {classesBase}" data-testid="paginator">
  <!-- Select Amount -->
  <label class="paginator-label {classesLabel}">
    <select
      bind:value={pageSize}
      on:change={() => {
        onChangeAmount()
      }}
      class="paginator-select {classesSelect}"
      aria-label="Select Amount"
      {disabled}
    >
      {#each amounts as amount}
        <option value={amount}>
          {amount}
          {amountText}
        </option>
      {/each}
    </select>
  </label>
  <!-- Details -->
  <span class="paginator-details {classesPageText}">
    {(currentPage - 1) * pageSize + 1} - {Math.min(
      (currentPage - 1) * pageSize + pageSize,
      totalItems
    )} <span class="opacity-50 px-2">/</span> <strong>{totalItems}</strong>
  </span>
  <!-- Arrows -->
  <div class="paginator-arrows space-x-2">
    <button
      type="button"
      class="btn-icon variant-filled"
      on:click={() => {
        onPrev()
      }}
      disabled={disabled || currentPage <= 1}
    >
      {@html buttonTextPrevious}
    </button>
    <button
      type="button"
      class="btn-icon variant-filled"
      on:click={() => {
        onNext()
      }}
      disabled={disabled || currentPage * pageSize >= totalItems}
    >
      {@html buttonTextNext}
    </button>
  </div>
</div>
