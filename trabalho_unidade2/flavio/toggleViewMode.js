function toggleViewMode(scene, wireframe, texture) {
    const toggleButtons = document.querySelectorAll('.toggle');
    toggleButtons.forEach(button => {
        button.addEventListener("click", () => {
            const toggleWireframe = button.classList.contains('wireframe');
            const toggleTexture = button.classList.contains('texture');

            if (toggleWireframe) {
                scene.add(wireframe)
                scene.remove(texture)
            } else if (toggleTexture) {
                scene.add(texture)
                scene.remove(wireframe)
            }
        })
    })
}