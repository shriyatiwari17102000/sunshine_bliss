
    function toggleOptions(optionId) {
      const selectedOption = document.getElementById(`${optionId}-options`);
      const currentBox = document.querySelector(`#${optionId}`).closest('.offer-box'); // Get the .offer-box element

      // Check if the click is on the radio button or within size/color options
      const radioButton = document.getElementById(optionId);
      const sizeColorOptions = selectedOption;
      if (event.target === radioButton || (sizeColorOptions && sizeColorOptions.contains(event.target))) {
        return; // Skip toggle if clicking directly on radio button or within size/color options
      }

      // If the selected option is currently shown, hide it
      if (selectedOption && selectedOption.style.display === 'block') {
        selectedOption.style.display = 'none';
        currentBox.classList.remove('selected');
      } else {
        // Hide all options and deselect all boxes first
        const allBoxes = document.querySelectorAll('.offer-box');
        allBoxes.forEach(box => {
          const options = box.querySelector('.size-color-options');
          if (options) {
            options.style.display = 'none'; // Hide all options
          }
          box.classList.remove('selected'); // Deselect all boxes
        });

        // Show the selected option and mark it as selected
        if (selectedOption) {
          selectedOption.style.display = 'block';
        }
        currentBox.classList.add('selected'); // Add .selected class to clicked box
        currentBox.querySelector(`#${optionId}`).checked = true; // Select the radio button
      }
    }

