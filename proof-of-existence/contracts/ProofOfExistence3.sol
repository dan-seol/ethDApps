// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract ProofOfExistence3 {
  // state
  mapping (bytes32 => bool) private proofs;

  // store a proof of existence in the contract state
  // *transactional function*
  function storeProof(bytes32 proof) public {
    proofs[proof] = true;
  }

  // calculate and store the proof for a document
  // *transactional function*
  function notarize(string calldata document) external {
    bytes32 proof = proofFor(document);
    storeProof(proof);
  }

  // helper function to get a document's sha256
  // *read-only function*
  function proofFor(string memory document) pure public returns (bytes32) {
    return keccak256(bytes(document));
  }

  // check if a document has been notarized
  // *read-only function*
  function checkDocument(string memory document) public view returns (bool) {
    bytes32 proof = proofFor(document);
    return hasProof(proof);
  }

  // returns true if proof is stored
  // *read-only function*
  function hasProof(bytes32 proof) internal view returns (bool) {
    return proofs[proof];
  }
}
