const ranks =
[{
    1: [
        "Success", "Transaction",
        "Resource", "Memory", "Disk",
        "Success", "Transaction",
        "Application", "Service", "Component",
        "Info"
    ]
},//low
{
    2: [
        "Warning", "Network", "Connection", "Latency", "Bottleneck", "Load", "Latency", "Slow", "Delay", "Network Down", "Connection Lost"]
},//medium
{
    3: [
        "Unauthorized", "Access Denied", "Intrusion", "Unusual", "Abnormal", "Anomaly", "Malware", "Exploit", "Attack",
        "High Usage", "Exceeded Limit",
        "Outage", "Downtime", "Unavailable",
        "Critical", "Error", "Exception", "Failure", "Fatal",
        "Privacy Breach", "Data Leak", "Authentication", "Authorization", "Vulnerability", "Hardware Failure", "Component Error"
    ]
}];//high

module.exports =ranks;