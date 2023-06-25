const canvas_tracking_project = document.getElementById('tracking_project_chart')

const data_tracking_project = {
    labels: ['Sprint 1', 'Sprint 2', 'Sprint 3', 'Sprint 4', 'Sprint 5'],
    datasets: [{
        label: 'Tracking Project',
        data: [55, 48, 67, 78, 89],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
};
const config_chart_tracking_project = {
    type: 'line',
    data: data_tracking_project,
}

new Chart(canvas_tracking_project, config_chart_tracking_project)

const canvas_task_project = document.getElementById('task_project_chart')

const data_task_project = {
    labels: ['Draft', 'Review', 'Assigned', 'In Progress', 'Completed'],
    datasets: [{
        label: 'Task Project',
        data: [65, 59, 80, 81, 56],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
        ],
        borderWidth: 1
    }]
};

const config_task_project = {
    type: 'bar',
    data: data_task_project,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
};

new Chart(canvas_task_project, config_task_project)