
    const tree = `<div>
    <div class="snapshot" id="Default">
        <div>
            <h1 class="title is-1">
                The quick brown fox jumps over the lazy dog
            </h1>
            <h2 class="title is-2">
                The quick brown fox jumps over the lazy dog
            </h2>
            <h3 class="title is-3">
                The quick brown fox jumps over the lazy dog
            </h3>
            <h4 class="title is-4">
                The quick brown fox jumps over the lazy dog
            </h4>
            <h5 class="title is-5">
                The quick brown fox jumps over the lazy dog
            </h5>
            <h6 class="title is-6">
                The quick brown fox jumps over the lazy dog
            </h6>
        </div>
    </div>
</div>`;
    test("Atom.Typography.Stories", () => {
      expect(tree).toMatchSnapshot();
    });
    