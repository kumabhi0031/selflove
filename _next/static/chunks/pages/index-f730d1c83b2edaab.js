(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        8312: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return r(191)
            }])
        },
        191: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return en
                }
            });
            var a = r(7568),
                n = r(655),
                s = r(5893),
                l = r(9008),
                i = r.n(l),
                o = r(7294),
                c = r(7194),
                $ = r(1561),
                d = r(6803),
                u = r.n(d),
                x = {
                    dataset: "production",
                    projectId: "hl8ayhlw",
                    apiVersion: "2021-10-21",
                    useCdn: !0
                };
            (0, $.eI)(x);
            var m = function(e) {
                    return u()(x).image(e)
                },
                p = function(e) {
                    if (e) {
                        if (e < 600 || e >= 500 && e < 900) return 100;
                        if (e >= 900) return 70
                    }
                },
                h = function(e) {
                    var t = e.pageInfo;
                    return (0, s.jsxs)("div", {
                        className: "lg:h-screen h-fit flex relative flex-col text-center md:text-left max-w-7xl lg:pt-20 lg:justify-evenly justify-start gap-10 space-y-5 mx-auto items-center",
                        children: [(0, s.jsx)("h3", {
                            className: "section-title ",
                            children: "About"
                        }), (0, s.jsxs)("div", {
                            className: "space-y-4 md:space-y-6 px-4 md:px-10 flex flex-col md:flex-row items-center gap-10",
                            children: [(0, s.jsx)(c.E.img, {
                                initial: {
                                    x: -200,
                                    opacity: 0
                                },
                                whileInView: {
                                    x: 0,
                                    opacity: 1
                                },
                                transition: {
                                    duration: 1.2
                                },
                                className: "w-48 h-48 -mb-30 md:mb-0 mt-4 flex-shrink-0 rounded-full md:rounded-lg md:w-64 md:h-80 object-cover",
                                viewport: {
                                    once: !0
                                },
                                src: m(null == t ? void 0 : t.profilePic).url()
                            }), (0, s.jsxs)("div", {
                                className: "flex flex-col gap-4",
                                children: [(0, s.jsxs)(c.E.h4, {
                                    initial: {
                                        y: 200,
                                        opacity: 0
                                    },
                                    whileInView: {
                                        y: 0,
                                        opacity: 1
                                    },
                                    transition: {
                                        duration: 1
                                    },
                                    viewport: {
                                        once: !0
                                    },
                                    className: "text-2xl lg:text-3xl font-semibold dark:text-gray_100",
                                    children: ["A", " ", (0, s.jsx)("span", {
                                        className: "underline underline-offset-[6px] decoration-blue_600",
                                        children: "little"
                                    }), " ", "about me"]
                                }), (0, s.jsx)(c.E.p, {
                                    initial: {
                                        y: 200,
                                        opacity: 0
                                    },
                                    whileInView: {
                                        y: 0,
                                        opacity: 1
                                    },
                                    transition: {
                                        duration: 1.5
                                    },
                                    viewport: {
                                        once: !0
                                    },
                                    className: "text-sm md:text-base dark:text-gray_300 text-gray_900 text-justify",
                                    children: null == t ? void 0 : t.backgroundInformation
                                })]
                            })]
                        })]
                    })
                },
                f = r(9974),
                g = r(2123),
                j = r(5851),
                y = r(9101),
                v = r(2920);
            r(993);
            var _ = function(e) {
                    var t = e.contactPerson,
                        r = e.contactNumber,
                        a = e.emailAddress,
                        n = e.location,
                        l = (0, o.useRef)(),
                        i = function(e) {
                            e.preventDefault(), y.ZP.sendForm("".concat("service_2yssdig"), "".concat("template_ghmawif"), l.current, "".concat("a4_QozzlMxhLLbCD2")).then(function(r) {
                                v.Am.success("Sent your message to ".concat(t, "!")), e.target.reset()
                            }, function(e) {
                                v.Am.error(e.text)
                            })
                        };
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)("div", {
                            className: "min-h-screen relative flex flex-col text-center md:text-left px-10 justify-center gap-5 md:justify-evenly mx-auto items-center",
                            children: [(0, s.jsx)("h3", {
                                className: "section-title",
                                children: "Contact"
                            }), (0, s.jsxs)("div", {
                                className: "flex flex-col space-y-8 mt-5",
                                children: [(0, s.jsxs)("h4", {
                                    className: "dark:text-gray_300 text-lg md:text-3xl font-semibold text-center",
                                    children: ["Got something for me?", " ", (0, s.jsx)("span", {
                                        className: "underline decoration-blue_700 underline-offset-4",
                                        children: "Gotcha!"
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "space-y-2 lg:space-y-4 flex flex-col items-start mx-auto",
                                    children: [(0, s.jsxs)("a", {
                                        href: "tel:".concat(r),
                                        className: "flex items-center space-x-3 justify-center",
                                        children: [(0, s.jsx)(f.Z, {
                                            className: "text-blue_900 dark:text-blue_600 h-7 w-7 animate-pulse"
                                        }), (0, s.jsx)("span", {
                                            className: "dark:text-gray_300 text-md md:text-xl",
                                            children: "Give me a call"
                                        })]
                                    }), (0, s.jsxs)("a", {
                                        href: "mailto:".concat(a),
                                        className: "flex items-center space-x-3 justify-center",
                                        children: [(0, s.jsx)(g.Z, {
                                            className: "text-blue_900 dark:text-blue_600 h-7 w-7 animate-pulse"
                                        }), (0, s.jsx)("span", {
                                            className: "dark:text-gray_300 text-md md:text-xl",
                                            children: "Write to me!"
                                        })]
                                    }), (0, s.jsxs)("div", {
                                        className: "flex items-center space-x-3 justify-center",
                                        children: [(0, s.jsx)(j.Z, {
                                            className: "text-blue_900 dark:text-blue_600 h-7 w-7 animate-pulse"
                                        }), (0, s.jsx)("p", {
                                            className: "dark:text-gray_300 text-md md:text-xl",
                                            children: n
                                        })]
                                    })]
                                }), (0, s.jsxs)("form", {
                                    ref: l,
                                    onSubmit: i,
                                    className: "flex flex-col space-y-3 mx-auto max-w-sm",
                                    children: [(0, s.jsxs)("div", {
                                        className: "flex gap-3 flex-wrap sm:flex-nowrap ",
                                        children: [(0, s.jsx)("input", {
                                            name: "name",
                                            required: !0,
                                            placeholder: "Name",
                                            className: "contact-input w-full",
                                            type: "text"
                                        }), (0, s.jsx)("input", {
                                            required: !0,
                                            name: "email",
                                            placeholder: "Email",
                                            className: "contact-input w-full",
                                            type: "text"
                                        })]
                                    }), (0, s.jsx)("input", {
                                        required: !0,
                                        name: "subject",
                                        placeholder: "Subject",
                                        className: "contact-input",
                                        type: "text"
                                    }), (0, s.jsx)("textarea", {
                                        required: !0,
                                        name: "message",
                                        placeholder: "Message",
                                        className: "contact-input resize-none overflow-y-auto scrollbar-thin scrollbar-track-gray_50/40 scrollbar-track-rounded-md scrollbar-thumb-rounded-md scrollbar-thumb-blue_900 h-32 "
                                    }), (0, s.jsx)("button", {
                                        className: "bg-blue_900/90 transition-all hover:bg-blue_900 text-gray_100 rounded-md font-bold py-2",
                                        children: "Submit"
                                    })]
                                })]
                            })]
                        }), (0, s.jsx)(v.Ix, {})]
                    })
                },
                b = r(521),
                w = r(7378),
                N = r(603),
                k = r(1664),
                I = r.n(k),
                E = r(2637),
                S = function(e) {
                    return (0, s.jsxs)(c.E.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            scale: [1, 2, 2, 3, 1],
                            opacity: [.1, .2, .4, .8, 1],
                            borderRadius: ["20%", "20%", "50%", "80%", "20%"]
                        },
                        transition: {
                            duration: 2.5
                        },
                        className: "relative flex justify-center items-center ",
                        children: [(0, s.jsx)("div", {
                            className: "border animate-ping border-gray_800/20 transition-colors duration-500 dark:border-gray_800 absolute mt-52 h-[150px] md:h-[200px] md:w-[200px] w-[150px] rounded-full"
                        }), (0, s.jsx)("div", {
                            className: "border border-gray_800/20 transition-colors duration-500 dark:border-gray_800 absolute mt-52 md:h-[300px] h-[225px] md:w-[300px] w-[225px] rounded-full"
                        }), (0, s.jsx)("div", {
                            className: "border border-gray_800/20 transition-colors duration-500 dark:border-gray_800 absolute mt-52 md:h-[500px] md:w-[500px] h-[375px] w-[375px] rounded-full"
                        }), (0, s.jsx)("div", {
                            className: "border border-blue_600 absolute mt-52 md:h-[650px] md:w-[650px] h-[487px] w-[487px] rounded-full animate-pulse"
                        }), (0, s.jsx)("div", {
                            className: "border border-gray_800/20 transition-colors duration-500 dark:border-gray_800 absolute mt-52 md:h-[800px] md:w-[800px] h-[600px] w-[600px] rounded-full"
                        })]
                    })
                },
                T = r(1902),
                Z = function(e) {
                    var t = e.pageInfo,
                        r = (0, N.Z)((0, E.Ku)({
                            words: null == t ? void 0 : t.typewriterWords,
                            loop: !0,
                            delaySpeed: 200
                        }), 1)[0];
                    return (0, s.jsxs)("div", {
                        className: "min-h-screen flex flex-col items-center space-y-8 justify-center text-center overflow-hidden",
                        children: [(0, s.jsx)(S, {}), (0, s.jsx)(c.E.img, {
                            initial: {
                                opacity: 0,
                                scale: 2
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            transition: {
                                duration: 2
                            },
                            src: m(null == t ? void 0 : t.heroImage).url(),
                            alt: null == t ? void 0 : t.name,
                            className: "h-32 w-32 rounded-full relative mx-auto object-cover"
                        }), (0, s.jsxs)("div", {
                            className: "z-20",
                            children: [(0, s.jsx)("h2", {
                                className: "text-xs font-bold md:text-md uppercase text-gray-500 dark:text-gray-500 pb-2 tracking-[10px] md:tracking-[15px]",
                                children: null == t ? void 0 : t.role
                            }), (0, s.jsxs)("h1", {
                                className: "text-2xl lg:text-4xl font-semibold px-10",
                                children: [(0, s.jsx)("span", {
                                    className: "italic dark:text-white",
                                    children: r
                                }), (0, s.jsx)(E.CF, {
                                    cursorColor: "#4e87f9"
                                })]
                            }), (0, s.jsxs)("div", {
                                className: "flex flex-wrap justify-center items-center gap-2 md:gap-3 mt-3",
                                children: [(0, s.jsx)(I(), {
                                    href: "#about",
                                    children: (0, s.jsx)("button", {
                                        className: "heroButton",
                                        children: "About"
                                    })
                                }), (0, s.jsx)(I(), {
                                    href: "#experience",
                                    children: (0, s.jsx)("button", {
                                        className: "heroButton",
                                        children: "Experience"
                                    })
                                }), (0, s.jsx)(I(), {
                                    href: "#skills",
                                    children: (0, s.jsx)("button", {
                                        className: "heroButton",
                                        children: "Skills"
                                    })
                                }), (0, s.jsx)(I(), {
                                    href: "#projects",
                                    children: (0, s.jsx)("button", {
                                        className: "heroButton",
                                        children: "Projects"
                                    })
                                })]
                            }), (0, s.jsxs)("a", {
                                className: "text-gray_900/80 hover:text-gray_900 dark:text-blue_200 hover:dark:text-blue_300 transition-colors gap-1 md:gap-2 font-normal lg:font-light flex justify-center items-center w-fit mx-auto pt-5 text-xs lg:text-base",
                                target: "_blank",
                                href: "/resume.pdf",
                                children: [(0, s.jsx)("span", {
                                    children: "Resume"
                                }), (0, s.jsx)(T.Z, {
                                    height: "1rem",
                                    width: "1rem"
                                })]
                            })]
                        })]
                    })
                };
            r(6703);
            var C = r(615),
                P = function(e) {
                    var t = (0, o.useState)(null),
                        r = t[0],
                        a = t[1];
                    return (0, o.useEffect)(function() {
                        var e = function() {
                            a({
                                width: window.innerWidth,
                                height: window.innerHeight
                            })
                        };
                        return window.addEventListener("resize", e),
                            function() {
                                return window.removeEventListener("resize", e)
                            }
                    }, [null == r ? void 0 : r.width, null == r ? void 0 : r.height]), {
                        width: null == r ? void 0 : r.width,
                        height: null == r ? void 0 : r.height
                    }
                },
                z = function(e) {
                    var t = e.projects,
                        r = P(null),
                        a = function(e, t) {
                            var r = new Date(e._createdAt),
                                a = new Date(t._createdAt);
                            return r > a ? 1 : r < a ? -1 : 0
                        };
                    return (0, s.jsxs)("div", {
                        className: "md:h-screen w-full relative overflow-hidden text-left flex flex-col justify-center mx-auto items-center z-20",
                        children: [(0, s.jsx)("h3", {
                            className: "section-title",
                            children: "Projects"
                        }), (0, s.jsx)(C.lr, {
                            showStatus: !1,
                            showIndicators: !1,
                            autoFocus: !0,
                            centerMode: !0,
                            showThumbs: !1,
                            centerSlidePercentage: p(null == r ? void 0 : r.width),
                            className: "mt-20 z-10 w-full overflow-hidden",
                            preventMovementUntilSwipeScrollTolerance: !0,
                            children: null == t ? void 0 : t.sort(a).map(function(e, t) {
                                return (0, s.jsxs)(c.E.div, {
                                    initial: {
                                        opacity: 0
                                    },
                                    transition: {
                                        duration: 1.2
                                    },
                                    whileInView: {
                                        opacity: 1
                                    },
                                    viewport: {
                                        once: !0
                                    },
                                    className: "shadow-2xl mx-3 my-2 rounded-lg px-2 py-10 h-[90%]",
                                    children: [(0, s.jsx)("a", {
                                        href: e.linkToBuild,
                                        target: "_blank",
                                        className: "max-w-xs relative flex mx-auto hover:scale-105 transition",
                                        children: (0, s.jsx)("img", {
                                            src: m(e.image).url(),
                                            alt: e.title,
                                            className: " rounded-md"
                                        })
                                    }), (0, s.jsxs)("div", {
                                        className: "space-y-4 mt-4 mx-auto ",
                                        children: [(0, s.jsxs)("p", {
                                            className: "flex justify-center items-center gap-4",
                                            children: [(0, s.jsx)("a", {
                                                href: null == e ? void 0 : e.linkToBuild,
                                                target: "_blank",
                                                className: "text-3xl underline flex justify-center items-center decoration-blue_600/70 underline-offset-8 dark:text-gray_100 font-semibold text-center",
                                                children: (0, s.jsx)("span", {
                                                    className: "-mt-2",
                                                    children: null == e ? void 0 : e.title
                                                })
                                            }), (0, s.jsx)("a", {
                                                href: null == e ? void 0 : e.linkToRepo,
                                                target: "_blank",
                                                className: "flex justify-center items-center",
                                                children: (0, s.jsx)("img", {
                                                    className: "w-8 h-8 object-cover ",
                                                    src: "https://res.cloudinary.com/sharath-media-library/image/upload/v1664616751/portfolio/github_1_lldh6d.svg",
                                                    alt: "github"
                                                })
                                            })]
                                        }), (0, s.jsx)("p", {
                                            className: "dark:text-gray_200 font-normal text-gray_900 text-justify text-sm lg:text-lg max-w-2xl mx-auto",
                                            children: null == e ? void 0 : e.summary
                                        })]
                                    })]
                                }, t)
                            })
                        }), (0, s.jsx)("div", {
                            className: "w-full absolute top-[50%] -translate-y-1/2 left-0 bg-blue_500/30 dark:bg-blue_500/20 h-[250px] lg:h-[500px] -skew-y-12 "
                        })]
                    })
                },
                A = r(4924),
                M = function(e) {
                    var t, r = e.directionTop,
                        a = e.skill,
                        n = e.setSelectedSkill;
                    return (0, s.jsx)(c.E.div, {
                        whileTap: (t = {}, (0, A.Z)(t, r ? "rotateY" : "rotateX", r ? 1e3 : -1e3), (0, A.Z)(t, "scale", 1.5), t),
                        transition: {
                            duration: .6
                        },
                        onClick: function() {
                            return n(a.title)
                        },
                        className: "p-1 dark:hover:bg-gray_800/30 shadow-md hover:bg-gray_200 bg-white/70 dark:bg-transparent shadow-gray_800/80 rounded-2xl transition-colors duration-300 relative flex cursor-pointer",
                        children: (0, s.jsx)(c.E.img, {
                            initial: {
                                y: r ? -100 : 100,
                                opacity: 0
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: !0
                            },
                            transition: {
                                duration: .5
                            },
                            className: "h-16 w-16 lg:h-20 lg:w-20 rounded-2xl p-1 z-50 border-gray-500 object-fill filter group-hover:grayscale transition duration-300 ease-in-out",
                            src: m(a.image).url()
                        })
                    })
                },
                V = function(e) {
                    var t = e.skills,
                        r = (0, o.useState)(""),
                        a = r[0],
                        n = r[1],
                        l = function(e, t) {
                            return e.progress < t.progress ? 1 : e.progress > t.progress ? -1 : 0
                        };
                    return (0, s.jsxs)("div", {
                        className: "flex relative flex-col text-center md:text-left max-w-[2000px] xl:px-10 h-screen py-10 space-y-6 justify-start lg:justify-evenly mx-auto items-center",
                        children: [(0, s.jsx)("h3", {
                            className: "section-title",
                            children: "Skills"
                        }), (0, s.jsx)("div", {
                            className: "grid grid-cols-3 mt-14 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-4 lg:gap-x-10 lg:gap-y-8 ",
                            children: null == t ? void 0 : t.sort(l).map(function(e, t, r) {
                                return (0, s.jsx)(M, {
                                    setSelectedSkill: n,
                                    directionTop: t % 2 == 0,
                                    skill: e
                                }, e._id)
                            })
                        }), (0, s.jsx)(c.E.div, {
                            initial: {
                                x: 30,
                                opacity: 0
                            },
                            whileInView: {
                                x: 0,
                                opacity: 1
                            },
                            transition: {
                                duration: .5
                            },
                            className: "h-5 flex flex-col gap-3 text-center",
                            children: (0, s.jsx)("p", {
                                className: "text-3xl italic text-gray_800/90 dark:text-gray_300 font-bold",
                                children: a
                            })
                        }, a)]
                    })
                },
                F = function(e) {
                    var t, r, a = e.experience,
                        n = function(e) {
                            var t = new Date(e),
                                r = t.getMonth(),
                                a = t.getFullYear();
                            return "".concat(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec", ][r], ". ").concat(a)
                        };
                    return (0, s.jsxs)("article", {
                        className: "px-4 shadow-2xl flex h-[80%] mx-4 md:mx-10 flex-col dark:text-gray_100 rounded-lg py-6 items-start space-y-4 dark:bg-gray_800 max-w-6xl bg-gray_50 overflow-y-auto mt-10",
                        children: [(0, s.jsxs)("div", {
                            className: "flex flex-col lg:flex-row gap-3 lg:gap-6 w-full",
                            children: [(0, s.jsx)(c.E.img, {
                                initial: {
                                    y: -100,
                                    opacity: 0
                                },
                                transition: {
                                    duration: 1.2
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: !0
                                },
                                className: "exp-company rounded-full w-16 h-16 md:w-32 md:h-32 object-cover mx-auto lg:mx-1 lg:text-left",
                                src: m(null == a ? void 0 : a.companyImage).url(),
                                alt: null == a ? void 0 : a.company
                            }), (0, s.jsxs)("div", {
                                className: " flex flex-col items-start space-y-3",
                                children: [(0, s.jsx)("h4", {
                                    className: "text-lg lg:text-3xl font-normal",
                                    children: null == a ? void 0 : a.jobTitle
                                }), (0, s.jsx)("p", {
                                    className: "font-bold text-md lg:text-lg my-2",
                                    children: null == a ? void 0 : a.company
                                }), (0, s.jsx)("p", {
                                    className: "text-sm lg:text-lg dark:text-gray_400 text-gray_700",
                                    children: "".concat(n(null == a ? void 0 : a.dateStarted), " - ").concat((null == a ? void 0 : a.isCurrentlyWorkingHere) ? "Till Date" : n(a.dateEnded))
                                }), (0, s.jsx)("div", {
                                    className: "flex justify-start items-center gap-3",
                                    children: null == a ? void 0 : null === (t = a.technologies) || void 0 === t ? void 0 : t.map(function(e) {
                                        return (0, s.jsx)("div", {
                                            className: "cursor-pointer rounded-2xl shadow-gray_900 hover:scale-105 transition-all hover:bg-gray_700/20 shadow-sm hover:shadow-md",
                                            children: (0, s.jsx)("img", {
                                                src: m(e.image).url(),
                                                alt: e.title,
                                                className: "h-8 rounded-2xl w-8 lg:w-14 lg:h-14 p-px lg:p-1 "
                                            })
                                        }, e._id)
                                    })
                                })]
                            })]
                        }), (0, s.jsx)("ul", {
                            className: "list-disc pl-4 px-3 exp-list text-xs md:text-base space-y-2 ml-5 h-56 md:h-60 overflow-y-auto scrollbar-track-transparent scrollbar-thumb-rounded-md scrollbar-thin text-justify",
                            children: null == a ? void 0 : null === (r = a.points) || void 0 === r ? void 0 : r.filter(function(e) {
                                return e.trim()
                            }).map(function(e) {
                                return (0, s.jsx)("li", {
                                    children: e
                                }, e)
                            })
                        })]
                    })
                },
                D = o.memo(F),
                L = function(e) {
                    var t = e.experiences,
                        r = P(null);
                    return (0, s.jsxs)(c.E.div, {
                        initial: {
                            opacity: 0
                        },
                        whileInView: {
                            opacity: 1
                        },
                        transition: {
                            duration: 1.5
                        },
                        className: "flex relative flex-col text-center md:text-left px-2 pt-20 justify-evenly mx-auto items-center",
                        children: [(0, s.jsx)("h3", {
                            className: "section-title",
                            children: "Experience"
                        }), (0, s.jsx)(C.lr, {
                            swipeScrollTolerance: 20,
                            autoFocus: !0,
                            centerMode: !0,
                            className: "w-full overflow-hidden",
                            centerSlidePercentage: p(null == r ? void 0 : r.width),
                            showStatus: !1,
                            showThumbs: !1,
                            showIndicators: !1,
                            preventMovementUntilSwipeScrollTolerance: !0,
                            children: null == t ? void 0 : t.map(function(e) {
                                return (0, s.jsx)(D, {
                                    experience: e
                                }, e._id)
                            })
                        })]
                    })
                },
                q = r(9121),
                B = r(4346),
                R = r(6459);

            function G(e) {
                var t = e.socials,
                    r = e.isDark,
                    a = e.switchTheme,
                    n = r ? "hsl(0, 0%, 40%)" : "hsl(0, 0%, 30%)";
                return (0, s.jsx)("header", {
                    className: "sticky top-0 bg-inherit z-50 w-full ",
                    children: (0, s.jsxs)("div", {
                        className: "px-4 lg:px-10 py-1 lg:py-2 mx-auto max-w-7xl md:px-20 flex",
                        children: [(0, s.jsx)(c.E.div, {
                            initial: {
                                x: -500,
                                opacity: 0,
                                scale: .5
                            },
                            animate: {
                                x: 0,
                                opacity: 1,
                                scale: 1
                            },
                            transition: {
                                duration: 1.5
                            },
                            className: "flex items-center mr-auto max-w-6xl justify-center",
                            children: t.map(function(e) {
                                return (0, s.jsx)(q.QZ, {
                                    label: e.title,
                                    url: e.url,
                                    fgColor: n,
                                    bgColor: "transparent"
                                }, e._id)
                            })
                        }), (0, s.jsxs)(c.E.a, {
                            href: "#contact",
                            initial: {
                                x: -500,
                                opacity: 0,
                                scale: .5
                            },
                            animate: {
                                x: 0,
                                opacity: 1,
                                scale: 1
                            },
                            transition: {
                                duration: 1
                            },
                            className: "flex items-center mr-3 lg:mr-8 text-gray-300 cursor-pointer ",
                            children: [(0, s.jsx)(q.QZ, {
                                className: "cursor-pointer",
                                network: "email",
                                fgColor: n,
                                bgColor: "transparent"
                            }), (0, s.jsx)("span", {
                                className: "uppercase hidden md:inline-flex text-sm text-gray-700 dark:text-gray-400",
                                children: "Get In Touch"
                            })]
                        }), (0, s.jsx)(c.E.button, {
                            initial: {
                                opacity: 0,
                                scale: 0
                            },
                            animate: {
                                scale: 1,
                                opacity: 1
                            },
                            transition: {
                                duration: 1
                            },
                            onClick: a,
                            children: r ? (0, s.jsx)(c.E.div, {
                                initial: {
                                    opacity: 0,
                                    x: 200
                                },
                                animate: {
                                    opacity: 1,
                                    x: [-100, 20, 0]
                                },
                                transition: {
                                    duration: 1.5
                                },
                                children: (0, s.jsx)(B.Z, {
                                    className: "h-8 w-8 p-1 rounded-full shadow-md shadow-gray_100/30 border border-gray_500/30 text-gray-400 hover:bg-gray_800 "
                                })
                            }) : (0, s.jsx)(c.E.div, {
                                initial: {
                                    opacity: 0,
                                    x: 200
                                },
                                animate: {
                                    opacity: 1,
                                    x: [-100, 20, 0]
                                },
                                transition: {
                                    duration: 1.5
                                },
                                children: (0, s.jsx)(R.Z, {
                                    className: "h-8 w-8 p-1 rounded-full hover:bg-gray_100 border shadow-md shadow-gray_500 border-gray_500/30"
                                })
                            })
                        })]
                    })
                })
            }
            var W, X, J, O, Q, Y, H = (W = (0, a.Z)(function(e) {
                    var t, r, a;
                    return (0, n.__generator)(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, fetch("".concat(e, "/api/getPageInfo"))];
                            case 1:
                                return [4, (t = n.sent()).json()];
                            case 2:
                                return [2, a = (r = n.sent()).pageInfo]
                        }
                    })
                }), function(e) {
                    return W.apply(this, arguments)
                }),
                U = (X = (0, a.Z)(function(e) {
                    var t, r, a;
                    return (0, n.__generator)(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, fetch("".concat(e, "/api/getExperience"))];
                            case 1:
                                return [4, (t = n.sent()).json()];
                            case 2:
                                return [2, a = (r = n.sent()).experiences]
                        }
                    })
                }), function(e) {
                    return X.apply(this, arguments)
                }),
                K = (J = (0, a.Z)(function(e) {
                    var t, r, a;
                    return (0, n.__generator)(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, fetch("".concat(e, "/api/getSkills"))];
                            case 1:
                                return [4, (t = n.sent()).json()];
                            case 2:
                                return [2, a = (r = n.sent()).skills]
                        }
                    })
                }), function(e) {
                    return J.apply(this, arguments)
                }),
                ee = (O = (0, a.Z)(function(e) {
                    var t, r, a;
                    return (0, n.__generator)(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, fetch("".concat(e, "/api/getSocials"))];
                            case 1:
                                return [4, (t = n.sent()).json()];
                            case 2:
                                return [2, a = (r = n.sent()).socials]
                        }
                    })
                }), function(e) {
                    return O.apply(this, arguments)
                }),
                et = (Q = (0, a.Z)(function(e) {
                    var t, r, a;
                    return (0, n.__generator)(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, fetch("".concat(e, "/api/getProjects"))];
                            case 1:
                                return [4, (t = n.sent()).json()];
                            case 2:
                                return [2, a = (r = n.sent()).projects]
                        }
                    })
                }), function(e) {
                    return Q.apply(this, arguments)
                }),
                er = r(2987),
                ea = function(e) {
                    var t = e.pageInfo,
                        r = e.skills,
                        a = e.projects,
                        n = e.experiences,
                        l = e.socials,
                        $ = (0, o.useState)(null),
                        d = $[0],
                        u = $[1];
                    (0, o.useEffect)(function() {
                        var e;
                        ! function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "dark";
                            document.documentElement.classList.add(e), u("dark" === e)
                        }(null !== (e = localStorage.getItem("portfolioTheme")) && void 0 !== e ? e : "dark")
                    }, []);
                    var x = function() {
                            d ? (u(function(e) {
                                return !e
                            }), null == localStorage || localStorage.setItem("portfolioTheme", "light"), document.documentElement.classList.remove("dark")) : (u(function(e) {
                                return !e
                            }), null == localStorage || localStorage.setItem("portfolioTheme", "dark"), document.documentElement.classList.add("dark"))
                        },
                        m = (0, o.useRef)(null),
                        p = function() {
                            window.scrollTo({
                                top: 0,
                                left: 0,
                                behavior: "smooth"
                            })
                        },
                        f = (0, b.v)().scrollYProgress,
                        g = (0, w.q)(f, {
                            stiffness: 100,
                            damping: 30,
                            restDelta: .001
                        });
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)(i(), {
                            children: [(0, s.jsx)("title", {
                                children: null == t ? void 0 : t.name
                            }), (0, s.jsx)("meta", {
                                name: "title",
                                content: null == t ? void 0 : t.name
                            }), (0, s.jsx)("meta", {
                                name: "description",
                                content: null == t ? void 0 : t.shortInfo
                            }), (0, s.jsx)("meta", {
                                property: "og:type",
                                content: "website"
                            }), (0, s.jsx)("meta", {
                                property: "og:url",
                                content: null == t ? void 0 : t.domain
                            }), (0, s.jsx)("meta", {
                                property: "og:title",
                                content: null == t ? void 0 : t.name
                            }), (0, s.jsx)("meta", {
                                property: "og:description",
                                content: null == t ? void 0 : t.shortInfo
                            }), (0, s.jsx)("meta", {
                                property: "og:image",
                                content: "".concat(null == t ? void 0 : t.domain, "seoImage.png")
                            }), (0, s.jsx)("meta", {
                                property: "twitter:card",
                                content: "summary_large_image"
                            }), (0, s.jsx)("meta", {
                                property: "twitter:url",
                                content: null == t ? void 0 : t.domain
                            }), (0, s.jsx)("meta", {
                                property: "twitter:title",
                                content: null == t ? void 0 : t.name
                            }), (0, s.jsx)("meta", {
                                property: "twitter:description",
                                content: null == t ? void 0 : t.shortInfo
                            }), (0, s.jsx)("meta", {
                                property: "twitter:image",
                                content: "".concat(null == t ? void 0 : t.domain, "seoImage.png")
                            }), (0, s.jsx)("link", {
                                rel: "icon",
                                href: "/favicon.ico"
                            })]
                        }), (0, s.jsx)(c.E.div, {
                            ref: m,
                            style: {
                                scaleX: g
                            },
                            className: "progress-bar"
                        }), (0, s.jsxs)("div", {
                            className: "relative tw-bg-primary home transition-colors ease-in-out duration-500 overflow-y-scroll",
                            children: [(0, s.jsx)(G, {
                                isDark: d,
                                switchTheme: x,
                                socials: l
                            }), (0, s.jsx)("section", {
                                id: "hero",
                                children: (0, s.jsx)(Z, {
                                    pageInfo: t
                                })
                            }), (0, s.jsx)("section", {
                                id: "about",
                                children: (0, s.jsx)(h, {
                                    pageInfo: t
                                })
                            }), (0, s.jsx)("section", {
                                id: "experience",
                                children: (0, s.jsx)(L, {
                                    experiences: n
                                })
                            }), (0, s.jsx)("section", {
                                id: "skills",
                                children: (0, s.jsx)(V, {
                                    skills: r
                                })
                            }), (0, s.jsx)("section", {
                                id: "projects",
                                children: (0, s.jsx)(z, {
                                    projects: a
                                })
                            }), (0, s.jsx)("section", {
                                id: "contact",
                                children: (0, s.jsx)(_, {
                                    contactPerson: null == t ? void 0 : t.name,
                                    contactNumber: t.phoneNumber,
                                    location: null == t ? void 0 : t.address,
                                    emailAddress: null == t ? void 0 : t.email
                                })
                            }), (0, s.jsx)("div", {
                                onClick: p,
                                className: "w-10 h-10 rounded-full animate-bounce fixed z-[100] bottom-10 md:bottom-10 cursor-pointer shadow-md left-[85%] lg:left-[90%]",
                                children: (0, s.jsx)(er.Z, {
                                    className: "text-gray_800 rounded-full dark:text-gray_200"
                                })
                            })]
                        })]
                    })
                },
                en = ea;
            ea.getInitialProps = (Y = (0, a.Z)(function(e) {
                var t, r, a, s, l, i, o, c;
                return (0, n.__generator)(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return t = e.req, r = "", t && (r = "http://".concat(t.headers.host)), [4, H(r)];
                        case 1:
                            return a = n.sent(), [4, U(r)];
                        case 2:
                            return s = n.sent(), [4, K(r)];
                        case 3:
                            return l = n.sent(), [4, ee(r)];
                        case 4:
                            return i = n.sent(), [4, et(r)];
                        case 5:
                            return o = n.sent(), [2, ((c = {}).pageInfo = a, c.experiences = s, c.skills = l, c.socials = i, c.projects = o, c)]
                    }
                })
            }), function(e) {
                return Y.apply(this, arguments)
            })
        }
    },
    function(e) {
        e.O(0, [204, 774, 888, 179], function() {
            return e(e.s = 8312)
        }), _N_E = e.O()
    }
]);