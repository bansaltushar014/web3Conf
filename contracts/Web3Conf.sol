pragma solidity ^0.8.18;

contract Web3Conf{

    struct mentorMentee {
        address menteeName;
        address mentorName;
        uint price; 
        string service;
        uint currentTimeStamp;
        string meetingSchedule;
        string meetingStatus;
    }

    mapping(uint => mentorMentee) mentorMenteeMap;
    mapping(address => uint) ratingMap;

    uint count;

    constructor(){
        count = 0;
    }

    function setMeeting(address mentorName,
        uint price,
        string memory service,
        string memory meetingSchedule
        ) 
         external{
        mentorMenteeMap[count] = mentorMentee(msg.sender, mentorName, price, service, block.timestamp, meetingSchedule, "Scheduled!");
        count++; 
    }

    function getMeetingDetails(uint _id) view public
     returns(address menteeName,
             address mentorName,
             uint price,
             string memory service,
             uint currentTimeStamp,
             string memory meetingSchedule,
             string memory meetingStatus ){
                 return (
                     mentorMenteeMap[_id].menteeName,
                     mentorMenteeMap[_id].mentorName,
                     mentorMenteeMap[_id].price,
                     mentorMenteeMap[_id].service,
                     mentorMenteeMap[_id].currentTimeStamp,
                     mentorMenteeMap[_id].meetingSchedule,
                     mentorMenteeMap[_id].meetingStatus
                 );
            }
    
    function giveFeedback(uint meetingId, uint rating) public {
        require(mentorMenteeMap[meetingId].menteeName == msg.sender, "Unauthorized!");
        ratingMap[mentorMenteeMap[meetingId].mentorName] = ratingMap[mentorMenteeMap[meetingId].mentorName] + rating; 
        mentorMenteeMap[meetingId].meetingStatus = "Completed!";
    }

    function getRating(address respectiveMentor) public view returns(uint){
        return ratingMap[respectiveMentor];
    }

    function confirmMeeting(uint meetingId) public {
        require(mentorMenteeMap[meetingId].mentorName == msg.sender, "Unauthorized!");
        mentorMenteeMap[meetingId].meetingStatus = "Planned!";
    }

    function reschedule(uint meetingId, string memory meetingSchedule) public {
        require(mentorMenteeMap[meetingId].mentorName == msg.sender, "Unauthorized!");
        mentorMenteeMap[meetingId].meetingSchedule = meetingSchedule;
    }

    function cancelItByMentee(uint meetingId) public {
        require(mentorMenteeMap[meetingId].menteeName == msg.sender, "Unauthorized!");
        mentorMenteeMap[meetingId].meetingStatus = "Cancelled By Mentee!";
    }

    function cancelItByMentor(uint meetingId) public {
        require(mentorMenteeMap[meetingId].mentorName == msg.sender, "Unauthorized!");
        mentorMenteeMap[meetingId].meetingStatus = "Cancelled By Mentor!";
    }
    
}