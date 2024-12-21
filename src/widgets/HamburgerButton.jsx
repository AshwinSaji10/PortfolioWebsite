import { useState } from "react";
import { motion, MotionConfig } from "framer-motion";

const HamburgerButton = ({ isActive, toggleMenu }) => {
    return (
        <MotionConfig
            transition={{
                duration: 0.5,
                ease: "easeInOut",
            }}
        >
            <motion.button
                initial={false}
                onClick={toggleMenu}
                className="hover:bg-white/20"
                animate={isActive ? "open" : "closed"}
            >
                <motion.span
                    style={{
                        left: "10%",
                        top: "35%",
                        x: "-50%",
                        y: "-50%",
                    }}
                    className="absolute h-1 w-10 bg-white"
                    variants={{
                        open: {
                            rotate: ["0deg", "0deg", "45deg"],
                            top: ["35%", "50%", "50%"],
                        },
                        closed: {
                            rotate: ["45deg", "0deg", "0deg"],
                            top: ["50%", "50%", "35%"],
                        },
                    }}
                />
                <motion.span
                    style={{
                        left: "10%",
                        top: "50%",
                        x: "-50%",
                        y: "-50%",
                    }}
                    className="absolute h-1 w-10 bg-white"
                    variants={{
                        open: {
                            rotate: ["0deg", "0deg", "-45deg"],
                        },
                        closed: {
                            rotate: ["-45deg", "0deg", "0deg"],
                        },
                    }}
                />
                <motion.span
                    style={{
                        left: "10%",
                        bottom: "35%",
                        x: "-50%",
                        y: "50%",
                    }}
                    className="absolute h-1 w-10 bg-white"
                    variants={{
                        open: {
                            rotate: ["0deg", "0deg", "45deg"],
                        },
                        closed: {
                            rotate: ["45deg", "0deg", "0deg"],
                        },
                    }}
                />
            </motion.button>
        </MotionConfig>
    );
};

export default HamburgerButton;
