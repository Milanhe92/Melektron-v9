pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract SingularityStaking {
    IERC20 public mltrnToken;
    address public creator = 0x...; // Vaša adresa
    
    struct Stake {
        uint256 amount;
        uint256 startTime;
    }
    
    mapping(address => Stake) public stakes;
    uint256 public rewardRate = 20; // 20% godišnje
    
    constructor(address _tokenAddress) {
        mltrnToken = IERC20(_tokenAddress);
    }
    
    function stakeTokens(uint256 _amount) external {
        require(_amount > 0, "Količina mora biti veća od 0");
        
        mltrnToken.transferFrom(msg.sender, address(this), _amount);
        
        stakes[msg.sender] = Stake({
            amount: _amount,
            startTime: block.timestamp
        });
    }
    
    function calculateRewards(address _staker) public view returns(uint256) {
        Stake memory stake = stakes[_staker];
        uint256 stakingDuration = block.timestamp - stake.startTime;
        uint256 rewards = (stake.amount * rewardRate * stakingDuration) / (365 days * 100);
        
        return rewards;
    }
    
    function claimRewards() external {
        uint256 rewards = calculateRewards(msg.sender);
        uint256 creatorShare = rewards * 20 / 100; // 20% za tvorca
        
        mltrnToken.transfer(msg.sender, rewards - creatorShare);
        mltrnToken.transfer(creator, creatorShare);
        
        stakes[msg.sender].startTime = block.timestamp;
    }
}