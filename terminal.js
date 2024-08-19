document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("input");
    const output = document.getElementById("output");

    const commands = {
        help: "Available commands: help, about, clear",
        about: "This is a simple web-based terminal app.",
        clear: "clear",
    };

    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const command = input.value.trim();
            if (command) {
                processCommand(command);
            }
            input.value = ""; // Clear the input field
        }
    });

    function processCommand(command) {
        const outputLine = document.createElement("div");
        outputLine.textContent = `${document.getElementById("prompt").textContent} ${command}`;
        output.appendChild(outputLine);

        if (commands[command]) {
            if (command === "clear") {
                output.innerHTML = ""; // Clear the output
            } else {
                const responseLine = document.createElement("div");
                responseLine.textContent = commands[command];
                output.appendChild(responseLine);
            }
        } else {
            const errorLine = document.createElement("div");
            errorLine.textContent = `Command not found: ${command}`;
            output.appendChild(errorLine);
        }

        output.scrollTop = output.scrollHeight; // Scroll to the bottom
    }
});
