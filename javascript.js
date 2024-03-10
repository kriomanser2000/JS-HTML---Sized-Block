document.addEventListener('DOMContentLoaded', function() 
{
    var container = document.getElementById('text-block');
    var handle = document.getElementById('resize-handle');
    var isResizing = false;
    var startWidth, startHeight, startX, startY;
    handle.addEventListener('mousedown', function(event) 
    {
        isResizing = true;
        startWidth = parseInt(getComputedStyle(container).getPropertyValue('width'));
        startHeight = parseInt(getComputedStyle(container).getPropertyValue('height'));
        startX = event.clientX;
        startY = event.clientY;
    });
    document.addEventListener('mousemove', function(event) 
    {
        if (isResizing) 
        {
            var newWidth = startWidth + (event.clientX - startX);
            var newHeight = startHeight + (event.clientY - startY);
            container.style.width = newWidth + 'px';
            container.style.height = newHeight + 'px';
        }
    });
    document.addEventListener('mouseup', function() 
    {
        isResizing = false;
    });
});